import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainPage from './routes/MainPage'
import router from './routes/router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainPage></MainPage>
    </RouterProvider>
  </StrictMode>,
)
