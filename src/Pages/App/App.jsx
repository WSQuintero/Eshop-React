import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes/AppRoutes/AppRoutes'
import { NavBar } from '../../components/NavBar/NavBar'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
