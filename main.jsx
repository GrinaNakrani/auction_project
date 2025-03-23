import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './assets/components/Dashboard.jsx'
import Navigation from './assets/components/navigation.jsx'
import Sign_in from './assets/components/sign_in.jsx'
import Sign_up from './assets/components/sign_up.jsx'
import './App.css'    
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sign_in />
    <Sign_up />
    <Navigation />
    <Dashboard />
  </StrictMode>,
)
