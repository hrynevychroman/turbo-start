import type { App } from 'vue'

import { setupLayouts } from 'virtual:generated-layouts'
import type { RouteRecordRaw } from 'vue-router/auto'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { setupGuards } from './guards'

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])

    return route
  }

  return setupLayouts([route])[0]
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map(route => recursiveLayouts(route)),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'smooth', top: 60 }

    return { top: 0 }
  },
})

setupGuards(router)

export default function (app: App) {
  app.use(router)
}
