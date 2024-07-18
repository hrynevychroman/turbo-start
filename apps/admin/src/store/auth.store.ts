import type { User } from '@turbo/types'
import { promiseToast } from '@turbo/core/utils'
import type { LoginSchema, ResetPasswordSchema } from '@/schemas'
import { userForgotPasswordAPI, userResetPasswordAPI, userSignInAPI } from '@/services/auth'
import { getI18n } from '@/plugins/3-i18n'

export const useAuthStore = defineStore('auth-store', () => {
  const i18n = getI18n()

  const user = ref<User>()
  const token = ref<string>()
  const refreshToken = ref<string>()
  const expiresAt = ref<number>()

  const isLoading = ref(false)

  function logout() {
    user.value = undefined
    token.value = undefined
    refreshToken.value = undefined
    expiresAt.value = undefined
  }

  async function login(data: LoginSchema) {
    const { auth, uuid, email, firstName, lastName, telephone } = await userSignInAPI(data)

    if (auth) {
      user.value = {
        uuid,
        email,
        firstName,
        lastName,
        telephone,
        // TODO: avatar will be empty in MVP
        avatar: '',
      }

      token.value = auth.token
      refreshToken.value = auth.refreshToken
      expiresAt.value = auth.expiresAt * 1000
    }
  }

  async function forgotPassword(data: Pick<LoginSchema, 'login'>) {
    await promiseToast(userForgotPasswordAPI(data), {
      loading: i18n.global.t('auth.resettingPassword'),
      success: data => data.message,
      error: error => error.data?.errors[0],
    })
  }

  async function resetPassword(data: Omit<ResetPasswordSchema, 'code'>) {
    await promiseToast(userResetPasswordAPI(data), {
      loading: i18n.global.t('auth.resettingPassword'),
      success: data => data.message,
      error: error => error.data?.errors[0],
    })
  }

  function isAuthenticated() {
    return !!user.value
  }

  return {
    isLoading,
    user,
    token,
    refreshToken,
    expiresAt,
    login,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated,
  }
}, {
  persist: {
    storage: localStorage,
    paths: ['user', 'token', 'refreshToken', 'expiresAt'],
  },
})
