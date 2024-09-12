import { omit } from 'radash'
import type { Auth, User } from '@gwlab/types'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<User | null>(null)

  const token = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)
  const expiresAt = ref(0)
  const refreshExpiresAt = ref(0)

  const initials = computed(() => {
    if (!user.value)
      return ''

    return `${user.value.firstName[0]}${user.value.lastName[0]}`.toUpperCase()
  })

  function login(data: User & { auth: Auth }) {
    user.value = omit(data, ['auth'])
    updateAuth(data.auth)
  }

  function updateAuth(data: Auth) {
    token.value = data.token
    refreshToken.value = data.refreshToken
    expiresAt.value = data.expiresAt * 1000
    refreshExpiresAt.value = data.refreshExpiresAt * 1000
  }

  function clearAuth() {
    token.value = null
    refreshToken.value = null
    expiresAt.value = 0
    refreshExpiresAt.value = 0
  }

  function isAuthenticated() {
    return !!user.value
  }

  function logout() {
    user.value = null
    token.value = null
    refreshToken.value = null
    expiresAt.value = 0
    refreshExpiresAt.value = 0
  }

  return {
    user,
    token,
    refreshToken,
    expiresAt,
    refreshExpiresAt,
    isAuthenticated,
    login,
    logout,

    updateAuth,
    clearAuth,

    // Computed
    initials,
  }
}, {
  persist: {
    storage: localStorage,
    pick: ['user', 'token', 'refreshToken', 'expiresAt', 'refreshExpiresAt'],
  },
})
