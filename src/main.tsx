import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EncriptadorProvider } from './context/EncriptadorContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EncriptadorProvider>
      <App />
    </EncriptadorProvider>
  </StrictMode>,
)
