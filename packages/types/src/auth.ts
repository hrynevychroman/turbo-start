export interface GeneralResponse {
  message: string
  success: boolean
}

export interface ErrorResponse extends GeneralResponse {
  errors: string[]
}

export interface Auth {
  token: string
  refreshToken: string
  expiresAt: number
  refreshExpiresAt: number
}
