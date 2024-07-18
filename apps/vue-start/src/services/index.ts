import { ofetch } from 'ofetch'
import { refreshTokenAPI } from './auth'
import { useAuthStore } from '@/store'
import { router } from '@/plugins/1-router'

export const apiFetch = ofetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  retryStatusCodes: [],
  parseResponse: JSON.parse,
  async onRequest(context) {
    const authStore = useAuthStore()
    const { token, refreshToken, expiresAt, refreshExpiresAt } = storeToRefs(authStore)

    const isTokenExpired = Date.now() > expiresAt.value
    const isRefreshTokenExpired = Date.now() > refreshExpiresAt.value
    const isAuthEndpoint = context.request.toString().includes('/auth')
    const isRefreshEndpoint = context.request.toString().includes('/auth/refresh')
    const isRefreshOptions = Reflect.has(context.options, 'refreshed')

    if (isTokenExpired
      && refreshToken.value
      && !isRefreshOptions
      && !isAuthEndpoint
    ) {
      try {
        if (isRefreshTokenExpired)
          throw new Error('Refresh token expired')

        // Refresh token
        const { data } = await refreshTokenAPI(refreshToken.value)

        // Update Auth
        authStore.updateAuth(data)

        Reflect.set(context.options, 'refreshed', true)
      }
      catch (error) {
        console.error(error)
        useAuthStore().logout()
        router.push('/404')
      }
    }

    if (token.value && !isRefreshEndpoint) {
      // Add Authorization header
      context.options.headers = context.options.headers || {}
      context.options.headers = new Headers(context.options.headers)
      context.options.headers.set('Authorization', `Bearer ${token.value}`)
    }
  },
  async onResponseError(context) {
    const authStore = useAuthStore()
    const { token, refreshToken, refreshExpiresAt } = storeToRefs(authStore)
    const isRefreshEndpoint = context.request.toString().includes('/auth/refresh')

    if (context.response.status === 401 && refreshToken.value && token.value && !isRefreshEndpoint) {
      // Update token
      try {
        // If token already updated, but receive same error, logout
        // If 401 error is received from refresh endpoint, logout
        // If refresh token is expired, logout
        if (Reflect.has(context.options, 'unauth') || isRefreshEndpoint || refreshExpiresAt.value < Date.now()) {
          throw new Error('Unauthenticated error')
        }

        const { data } = await refreshTokenAPI(refreshToken.value)

        // Update Auth
        authStore.updateAuth(data)

        Reflect.set(context.options, 'unauth', true)

        // After token update, refresh the response
        context.response = await apiFetch(context.request, {
          ...context.options,
          onResponse(ctx) {
            Object.assign(context, ctx)
          },
        })
      }
      catch (error) {
        // Logout
        console.error(error)
        useAuthStore().logout()
        router.push('/404')
      }
    }
  },
})
