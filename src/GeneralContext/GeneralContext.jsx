import React, { createContext, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const [addedProducts, setAddedProducts] = useState(0)
  const [isOpenCart, setIsOpenCart] = useState(false)

  return (
    <MyContext.Provider
      value={{ addedProducts, setAddedProducts, isOpenCart, setIsOpenCart }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
