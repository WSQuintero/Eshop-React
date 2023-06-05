import React, { useContext, useEffect } from 'react'
import { AppRoutes } from '../../routes/AppRoutes/AppRoutes'
import { NavBar } from '../../components/NavBar/NavBar'
import { MyContext } from '../../GeneralContext/GeneralContext'

function App () {
  const { productsAdd } = useContext(MyContext)

  useEffect(() => {
    const productsAddJSON = JSON.stringify(productsAdd)
    localStorage.setItem('productsAdd', productsAddJSON)
  }, [productsAdd])

  console.log(productsAdd)

  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  )
}

export default App
