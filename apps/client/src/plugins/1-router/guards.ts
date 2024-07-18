import type { Router } from 'vue-router'
import { useAuthStore } from '@/store'

export function setupGuards(router: Router) {
  // router.beforeEach
  // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach((to) => {
    const auth = useAuthStore()

    /*
     * If it's a public route, continue navigation. This kind of pages are allowed to visited by login & non-login users. Basically, without any restrictions.
     * Examples of public routes are, 404, under maintenance, etc.
     */
    if (to.meta?.public)
      return

    /**
     * Check if users is logged in by checking if token & users data exists in local storage
     * Feel free to update this logic to suit your needs
     */
    const isLoggedIn = !!auth.token

    /*
      If users is logged in and is trying to access login like page, redirect to home
      else allow visiting the page
      (WARN: Don't allow executing further by return statement because next code will check for permissions)
     */
    if (to.meta?.unauthenticatedOnly) {
      if (isLoggedIn)
        return '/'
      else
        return undefined
    }

    if (!isLoggedIn) {
      return {
        name: 'login',
        query: {
          ...to.query,
          to: to.fullPath !== '/' ? to.path : undefined,
        },
      }
    }
  })
}
