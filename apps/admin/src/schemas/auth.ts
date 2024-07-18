import { z } from 'zod'

export const loginSchema = z.object({
  login: z.string().email(),
  password: z.string().min(8),
  remember_me: z.boolean().optional().default(false),
})

export type LoginSchema = z.infer<typeof loginSchema>

export const resetPasswordSchema = z.object({
  code: z.array(z.coerce.string()).length(6),
  reset_code: z.string().length(6),
  new_password: z.string().min(6).max(12),
})

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>
