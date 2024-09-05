import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import Navbar from './components/Navbar.tsx'
import WrappedApp from './components/WrappedApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Navbar></Navbar> */}
    {/* <App /> */}
    <WrappedApp></WrappedApp>
  </StrictMode>,
)
