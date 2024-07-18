import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  telephone: z.string().length(10),
})

export type RegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  login: z.string(),
  password: z.string(),
})

export type LoginSchema = z.infer<typeof loginSchema>

export const verifyCodeSchema = z.object({
  key: z.string(),
  code: z.array(z.coerce.string()).length(6),
  verificationCode: z.string().length(6),
})

export type VerifyCodeSchema = z.infer<typeof verifyCodeSchema>
