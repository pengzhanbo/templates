import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'

import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
)
