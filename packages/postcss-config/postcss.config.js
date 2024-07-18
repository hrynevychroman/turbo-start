const MAX_WIDTH = 1440
const MIN_WIDTH = 768

const allUnits = {
  px: {
    value: 'px',
    label: 'px',
    step: 1,
  },
  rem: {
    value: 'rem',
    label: 'rem',
    step: 0.01,
  },
}

/**
 * Units of measurements.
 */
export const UNITS = Object.values(allUnits)

/**
 * Parses a number and unit from a value.
 */
export function parseUnit(value) {
  const num = value.replace('px', '').replace('rem', '')

  const unitMatches = value.match(/[\d.\-+]*\s*(.*)/)
  const unit = unitMatches !== null ? unitMatches[1] : ''
  const match = UNITS.find(item => item.value === unit)

  return [num, match?.value || 'px', match?.step || 1]
}

function convertToRem(value, root) {
  const [num, unit] = parseUnit(value)

  if (unit === 'rem')
    return Number.parseFloat(num)

  return Number.parseFloat(num) / root
}

function toFixed(value) {
  return Number.parseFloat(value.toFixed(4))
}

function ac(endSize, startSize, minScreen = `${MIN_WIDTH}px`, maxScreen = `${MAX_WIDTH}px`, ROOT = '16') {
  const options = {
    minFontSize: startSize,
    maxFontSize: endSize,
    minWidth: minScreen,
    maxWidth: maxScreen,
    root: ROOT,
  }

  if (Object.values(options).some(value => !value))
    return ''

  const root = Number.parseInt(options.root, 10)

  const minFontSize = convertToRem(options.minFontSize, root)
  const maxFontSize = convertToRem(options.maxFontSize, root)
  const minWidth = convertToRem(options.minWidth, root)
  const maxWidth = convertToRem(options.maxWidth, root)

  if ([minFontSize, maxFontSize, minWidth, maxWidth].some(v => Number.isNaN(v)))
    return ''

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = toFixed(-minWidth * slope + minFontSize)

  const min = `${minFontSize}rem`
  const max = `${maxFontSize}rem`
  const preferred = `${yAxisIntersection}rem + ${toFixed(slope * 100)}vw`

  return `clamp(${min}, ${preferred}, ${max})`
}

export default {
  plugins: {
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-functions': {
      functions: {
        ac,
      },
    },
  },
}
