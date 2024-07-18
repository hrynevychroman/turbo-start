import type { ColumnDef } from '@tanstack/vue-table'

// Paths to nested properties (intellisense friendly)
export type Paths<T> = T extends object ? { [K in keyof T]:
  `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`
}[keyof T] : never

// Updated tanstack/vue-table types for columnDef
export type TableColumn<TData> = ColumnDef<TData> & { accessorKey: Paths<TData> | '' }

// Remove readonly from a type
export type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
}

// Prettify an object
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// Prettify an object recursively
export type PrettifyRecursive<T> = {
  [K in keyof T]: Prettify<T[K]>;
} & {};

// Get props from a component
export type ComponentProps<T> =
T extends new () => { $props: infer P } ? NonNullable<P> :
  T extends (props: infer P, ...args: any) => any ? P :
      {}

// Get slots from a component
export type ComponentSlots<T> =
T extends new () => { $slots: infer S } ? NonNullable<S> :
  T extends (props: any, ctx: { slots: infer S; attrs: any; emit: any }, ...args: any) => any ? NonNullable<S> :
      {}

// Get emits from a component
export type ComponentEmit<T> =
T extends new () => { $emit: infer E } ? NonNullable<E> :
  T extends (props: any, ctx: { slots: any; attrs: any; emit: infer E }, ...args: any) => any ? NonNullable<E> :
      {}

// Create an optional property in generic type
export type OptionalProperty<T, K extends string> = [T] extends [never] ? {} : { [P in K]: T };
