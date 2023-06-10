import React from 'react'
import { AppRoutes } from '../../routes/AppRoutes/AppRoutes'
import { NavBar } from '../../components/NavBar/NavBar'
import { CartProducts } from '../../components/CartProducts/CartProducts'

function App () {
  return (
    <>
      <header className='w-[99%] border border-gray-600 h-[70px] rounded-3xl p-6 flex items-center fixed  z-10 bg-gray-600 text-gray-200 font-bold'>
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
