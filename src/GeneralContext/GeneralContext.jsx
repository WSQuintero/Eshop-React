import React, { createContext, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const [addedProducts, setAddedProducts] = useState(0)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [productsAdd, setProductsAdd] = useState([])

  return (
    <MyContext.Provider
      value={{
        addedProducts,
        setAddedProducts,
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
