import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App'
import { IconContext } from 'react-icons'
import { BrowserRouter } from 'react-router-dom'
import { GeneralContext } from './GeneralContext/GeneralContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GeneralContext>
    <IconContext.Provider value={{ className: 'w-7 h-7 ' }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IconContext.Provider>
  </GeneralContext>
)
