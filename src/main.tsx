import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Website from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Website />
  </StrictMode>,
)
