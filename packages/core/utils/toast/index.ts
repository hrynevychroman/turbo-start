import type { FetchError } from 'ofetch'
import { toast } from 'vue-sonner'
import type { ErrorResponse } from '@gwlab/types'
import type { Component } from 'vue'

interface PromiseData<ToastData = any> {
  loading?: string | Component
  success?: (data: ToastData) => string | Component
  error?: (data: FetchError<ErrorResponse>) => string | Component | undefined
  description?: string | Component | ((data: any) => Component | string)
  finally?: () => void | Promise<void>
}

export function promiseToast<T>(promise: Promise<T>, options: PromiseData<T>) {
  let resolve: (value?: T) => void
  let reject: (reason?: any) => void

  const promiseToast = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })

  toast.promise(promise, {
    ...options,
    loading: options.loading,
    success: (data: T) => {
      resolve?.(data)
      return options.success?.(data) ?? ''
    },
    error: (data) => {
      reject?.(data)
      return options.error?.(data as FetchError<ErrorResponse>) ?? ''
    },
  })

  return promiseToast
}
