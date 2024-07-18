<template>
  <div class="flex h-screen">
    <div class="container flex flex-col pt-6">
      <img src="@turbo/core/assets/logo.svg" alt="logo" class="w-32">

      <div class="flex w-full grow flex-col items-center justify-center pt-20 sm:pt-10">
        <div class="flex w-full translate-y-[-5vh] flex-col items-center justify-center">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
