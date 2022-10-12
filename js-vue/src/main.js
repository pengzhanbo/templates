import App from './App.vue'
import { router, setupRouter } from './router'
import { setupStore } from './stores'

import 'normalize.css'
import './styles/index.scss'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)

  await router.isReady()
  app.mount('#app')
}

bootstrap()
