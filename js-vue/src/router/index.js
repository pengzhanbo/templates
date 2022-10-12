import { createRouter, createWebHistory } from 'vue-router'
import { setupGlobalGuards } from './guards'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export const setupRouter = (app) => {
  app.use(router)
  setupGlobalGuards(router)
}
