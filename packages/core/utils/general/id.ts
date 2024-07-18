import { customAlphabet } from 'nanoid'

export function generateId() {
  return crypto.randomUUID()
}

export function generateLetterId() {
  const nanoid = customAlphabet('abcedfghijklmnopqrstuvwxyz', 10)

  return nanoid()
}
