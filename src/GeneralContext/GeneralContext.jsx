import React, { createContext, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [productsAdd, setProductsAdd] = useState(
    JSON.parse(localStorage.getItem('productsAdd')) || []
  )

  return (
    <MyContext.Provider
      value={{
        isOpenCart,
        setIsOpenCart,
        productsAdd,
        setProductsAdd
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
