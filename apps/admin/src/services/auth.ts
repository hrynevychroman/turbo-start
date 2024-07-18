import type { Auth, GeneralResponse, User } from '@turbo/types'
import { apiFetch } from '.'
import type { LoginSchema, ResetPasswordSchema } from '@/schemas'

export async function userSignInAPI(body: LoginSchema) {
  return await apiFetch<{
    auth: Auth
  } & User>('/login', {
    method: 'POST',
    body,
  })
}

export async function userForgotPasswordAPI(body: Pick<LoginSchema, 'login'>) {
  return await apiFetch<GeneralResponse>('/password/reset', {
    method: 'POST',
    body,
  })
}

export async function userResetPasswordAPI(body: Omit<ResetPasswordSchema, 'code'>) {
  return await apiFetch<GeneralResponse>('/password/reset/confirm', {
    method: 'POST',
    body,
  })
}
