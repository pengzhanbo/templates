import App from './App.vue'
import { router, setupRouter } from './router'
import { setupStore } from './store'

import 'virtual:windi-devtools'
import 'virtual:windi.css'
import './styles/index.css'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)

  await router.isReady()
  app.mount('#app')
}

bootstrap()
