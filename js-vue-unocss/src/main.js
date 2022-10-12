import App from './App.vue'
import { router, setupRouter } from './router'
import { setupStore } from './stores'

import '@unocss/reset/tailwind.css'
import './styles/index.css'
import 'uno.css'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)

  await router.isReady()
  app.mount('#app')
}

bootstrap()
