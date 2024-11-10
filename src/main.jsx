import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Context.jsx'
import { MotionProvider } from './Motion.jsx'

createRoot(document.getElementById('root')).render(
   <AuthProvider>
  <MotionProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </MotionProvider>
  </AuthProvider>,
)
