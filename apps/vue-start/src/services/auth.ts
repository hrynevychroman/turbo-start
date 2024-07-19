import type { Auth, User } from '@gwlab/types'
import { apiFetch } from '.'
import type { RegisterSchema } from '@/schemas'

export async function sendCodeAPI({ key }: {
  key: string
}) {
  return await apiFetch<{
    message: string
  }>('/auth/send-code', {
    method: 'POST',
    body: {
      campaignResponseUuid: key,
    },
  })
}

export async function verifyCodeAPI({ key, verificationCode }: {
  key: string
  verificationCode: string
}) {
  return await apiFetch<{
    data: {
      message: string
      auth: Auth
    } & User
  }>('/auth/verify-code', {
    method: 'POST',
    body: {
      campaignResponseUuid: key,
      verificationCode,
    },
  })
}

export async function googleLoginAPI(code: string) {
  return await apiFetch<{
    data: User & {
      auth: Auth
    }
  }>('/auth/google-login', {
    method: 'POST',
    body: {
      code,
    },
  })
}

export async function verifyTokenAPI() {
  return await apiFetch<{
    message: string
  }>('/auth/verify', {
    method: 'GET',
  })
}

export async function refreshTokenAPI(refresh_token: string) {
  return await apiFetch<{
    status: number
    success: boolean
    message: string
    data: Auth
  }>('/auth/refresh', {
    method: 'POST',
    body: {
      refresh_token,
    },
  })
}

export async function registerAPI({ email, firstName, lastName, telephone }: RegisterSchema) {
  return await apiFetch<{
    data: User & {
      auth: Auth
    }
  }>('/auth/register', {
    method: 'POST',
    body: {
      email,
      firstName,
      lastName,
      telephone,
    },
  })
}
