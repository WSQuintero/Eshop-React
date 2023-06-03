import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes/AppRoutes/AppRoutes'
import { NavBar } from '../../components/NavBar/NavBar'
import { GeneralContext } from '../../GeneralContext/GeneralContext'
import './App.css'

function App () {
  return (
    <GeneralContext>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </GeneralContext>
  )
}

export default App
