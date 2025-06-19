import { StrictMode } from 'react'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ShopContextProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
)
