export const useSidebarStore = defineStore('sidebar-store', () => {
  const [isOpen, toggle] = useToggle(false)
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  syncRef(isOpen, isLargeScreen)

  return {
    isOpen,
    toggle,
    close: () => toggle(false),
    open: () => toggle(true),
  }
})
