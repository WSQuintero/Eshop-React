import React, { useContext } from 'react'
import { AppRoutes } from '../../routes/AppRoutes/AppRoutes'
import { NavBar } from '../../components/NavBar/NavBar'
import { CartProducts } from '../../components/CartProducts/CartProducts'
import { MyContext } from '../../GeneralContext/GeneralContext'

function App () {
  const { isOpenBurguerMenu } = useContext(MyContext)
  const headerStyles = isOpenBurguerMenu ? 'h-[100vh] ' : 'h-[50px] '

  return (
    <>
      <header
        className={`w-[100%] border border-gray-600 ${headerStyles} lg:h-[50px] text-sm p-10 flex fixed  lg:items-center z-10 bg-[#1c3166] text-gray-200 font-bold`}
      >
        <NavBar />
      </header>
      <main className='w-[100%] px-10 flex flex-col items-center min-h-[95vh] justify-start pb-20'>
        <AppRoutes />
        <CartProducts />
      </main>
    </>
  )
}

export default App
