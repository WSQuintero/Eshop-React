import React, { createContext, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [productsAdd, setProductsAdd] = useState(
    JSON.parse(localStorage.getItem('productsAdd')) || []
  )
  const [openProductDetail, setOpenProductDetail] = useState([false, {}])
  const [isSell, setIsSell] = useState(false)

  return (
    <MyContext.Provider
      value={{
        isOpenCart,
        setIsOpenCart,
        productsAdd,
        setProductsAdd,
        openProductDetail,
        setOpenProductDetail,
        isSell,
        setIsSell
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
