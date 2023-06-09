import React, { useContext, useEffect } from 'react'
import { AppRoutes } from '../../routes/AppRoutes/AppRoutes'
import { NavBar } from '../../components/NavBar/NavBar'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { CartProducts } from '../../components/CartProducts/CartProducts'

function App () {
  const { productsAdd } = useContext(MyContext)

  useEffect(() => {
    const productsAddJSON = JSON.stringify(productsAdd)
    localStorage.setItem('productsAdd', productsAddJSON)
  }, [productsAdd])

  return (
    <>
      <header className='w-[90%] border border-gray-600 h-[6px] rounded-3xl mt-2 p-6 flex items-center fixed  z-10 bg-white'>
        <NavBar />
      </header>
      <main className='w-[100%] px-10 flex flex-col items-center min-h-[95vh] justify-center'>
        <AppRoutes />
        <CartProducts />
      </main>
    </>
  )
}

export default App
