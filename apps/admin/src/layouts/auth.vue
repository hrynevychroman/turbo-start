<template>
  <div class="flex h-screen items-center">
    <div class="mx-4 flex w-full -translate-y-16 flex-col items-center gap-11">
      <div class="flex flex-col gap-4">
        <h1 class="text-center font-serif text-xl">
          {{ $t('auth.welcome') }}
        </h1>
        <img src="@turbo/core/assets/logo.svg" alt="logo" class="w-56 sm:w-72">
      </div>

      <div class="flex w-full max-w-md flex-col gap-6 rounded-lg bg-white p-6 shadow-lg sm:p-12">
        <RouterView />
      </div>
    </div>
  </div>
</template>
