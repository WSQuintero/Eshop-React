import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer'
const MyContext = createContext()

function GeneralContext ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToLocalStorage = (toAdd, nameToAdd) => {
    localStorage.setItem(nameToAdd, JSON.stringify(toAdd))
  }
  const addToSesionStorage = (toAdd, nameToAdd) => {
    sessionStorage.setItem(
      nameToAdd,
      JSON.stringify(toAdd)
    )
  }
  const addOrDeleteProduct = ({
    Category,
    title,
    price,
    images,
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
      dispatch({ type: 'ADD_PRODUCT', value: product })
      addToLocalStorage(product, 'productsAdd')
    } else {
      const productsInCart = [...productsAdd]
      productsInCart.splice(isInCart, 1)
      dispatch({ type: 'ADD_PRODUCT', value: productsInCart })
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
      dispatch({ type: 'ADD_ORDERS', value: duplicatedOrders })
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
