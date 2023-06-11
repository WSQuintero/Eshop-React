import React, { createContext, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [productsAdd, setProductsAdd] = useState(
    JSON.parse(localStorage.getItem('productsAdd')) || []
  )
  const [openProductDetail, setOpenProductDetail] = useState([false, {}])
  const [isSell, setIsSell] = useState(false)
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem('orders')) || []
  )
  const [reviewOrder, setReviewOrder] = useState()
  const [optionSelected, setOptionSelected] = useState('asc')
  const [isOpenBurguerMenu, setIsOpenBurguerMenu] = useState(false)

  const [isLoged, setIsLoged] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('')
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  )
  const [error, setError] = useState('')
  const addToLocalStorage = (toAdd, nameToAdd) => {
    const toAddAddJSON = JSON.stringify(toAdd)
    localStorage.setItem(nameToAdd, toAddAddJSON)
  }
  const addOrDeleteProduct = ({
    Category,
    title,
    price,
    images,
    setProductsAdd,
    isInCart,
    productsAdd,
    description
  }) => {
    const product = [
      ...productsAdd,
      {
        images,
        Category,
        title,
        price,
        description
      }
    ]

    if (isInCart === -1) {
      setProductsAdd(product)
      addToLocalStorage(product, 'productsAdd')
    } else {
      const productsInCart = [...productsAdd]
      productsInCart.splice(isInCart, 1)
      setProductsAdd(productsInCart)
      addToLocalStorage(productsInCart, 'productsAdd')
    }
  }
  const addOrDeleteOrders = (toAdd) => {
    const orders = JSON.parse(localStorage.getItem('orders'))
    const isInOrders = orders.findIndex((order) => order.time === toAdd.time)
    if (isInOrders === -1) addToLocalStorage(toAdd, 'orders')
    if (isInOrders !== -1) {
      const duplicatedOrders = [...orders]
      duplicatedOrders.splice(isInOrders, 1)
      addToLocalStorage(duplicatedOrders, 'orders')
      setOrders(duplicatedOrders)
    }
  }

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
        setIsSell,
        orders,
        setOrders,
        addOrDeleteOrders,
        addToLocalStorage,
        addOrDeleteProduct,
        reviewOrder,
        setReviewOrder,
        optionSelected,
        setOptionSelected,
        isOpenBurguerMenu,
        setIsOpenBurguerMenu,
        isLoged,
        setIsLoged,
        emailValue,
        setEmailValue,
        passwordValue,
        setPasswordValue,
        nameValue,
        setNameValue,
        repeatPasswordValue,
        setRepeatPasswordValue,
        users,
        setUsers,
        error,
        setError
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
