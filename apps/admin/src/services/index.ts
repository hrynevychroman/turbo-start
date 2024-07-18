import { ofetch } from 'ofetch'
import { useAuthStore } from '@/store'

export const apiFetch = ofetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  parseResponse: JSON.parse,
  retryStatusCodes: [],
  onRequest({ options }) {
    const token = useAuthStore().token

    if (token) {
      // Add Authorization header
      options.headers = options.headers || {}
      options.headers = new Headers(options.headers)
      options.headers.set('Authorization', `Bearer ${token}`)
    }
  },
  onResponseError: (error: any) => {
    console.error(error)
  },
})
