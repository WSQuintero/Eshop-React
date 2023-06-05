import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes/AppRoutes/AppRoutes'
import { NavBar } from '../../components/NavBar/NavBar'
import { GeneralContext } from '../../GeneralContext/GeneralContext'
import './App.css'
import { IconContext } from 'react-icons'

function App () {
  return (
    <GeneralContext>
      <BrowserRouter>
        <IconContext.Provider value={{ className: 'w-7 h-7 ' }}>
          <NavBar />
          <AppRoutes />
        </IconContext.Provider>
      </BrowserRouter>
    </GeneralContext>
  )
}

export default App
