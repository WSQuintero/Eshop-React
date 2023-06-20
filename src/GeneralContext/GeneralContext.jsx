import React, { createContext, useReducer, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const initialState = {
    isOpenCart: false,
    productsAdd: JSON.parse(localStorage.getItem('productsAdd')) || [],
    openProductDetail: [false, {}],
    isSell: false,
    orders: JSON.parse(localStorage.getItem('orders')) || [],
    reviewOrder: '',
    optionSelected: 'asc',
    isOpenBurguerMenu: false,
    isLoged: JSON.parse(sessionStorage.getItem('actualUser')) !== null || false,
    emailValue: '',
    passwordValue: '',
    nameValue: '',
    repeatPasswordValue: '',
    users: JSON.parse(localStorage.getItem('users')) || [],
    error: '',
    tryBuyWithoutLogIn: false,
    selectedImage: null
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case ""
    }
  }

  const [state,dispatch]=useReducer(reducer,initialState)

  
  const addToLocalStorage = (toAdd, nameToAdd) => {
    const toAddAddJSON = JSON.stringify(toAdd)
    localStorage.setItem(nameToAdd, toAddAddJSON)
  }
  const addToSesionStorage = (toAdd, nameToAdd) => {
    const toAddAddJSON = JSON.stringify(toAdd)
    sessionStorage.setItem(nameToAdd, toAddAddJSON)
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
    const orders = JSON.parse(localStorage.getItem('orders')) || []
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
        addOrDeleteOrders,
        addToLocalStorage,
        addOrDeleteProduct,
        addToSesionStorage,
        dispatch,
        state
              }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
