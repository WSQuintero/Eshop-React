import React, { createContext, useReducer } from 'react'

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

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INFORMATION_PRODUCT_DETAIL':
        return {
          ...state,
          openProductDetail: action.value
        }
      case 'CLOSE-CART':
        return {
          ...state,
          isOpenCart: false
        }
      case 'ADD_PRODUCT':
        return {
          ...state,
          productsAdd: action.value
        }
      case 'ADD_ORDERS':
        return {
          ...state,
          orders: action.value
        }
      case 'NO_SELL':
        return {
          ...state,
          isSell: false
        }
      case 'IS_SELL':
        return {
          ...state,
          isSell: true
        }
      case 'CH_CART':
        return {
          ...state,
          isOpenCart: action.value
        }
      case 'TRY_BUY_WITHOUT_LOGIN':
        return {
          ...state,
          tryBuyWithoutLogIn: action.value
        }
      case 'ASCEND':
        return {
          ...state,
          optionSelected: 'asc'
        }
      case 'ORDER':
        return {
          ...state,
          optionSelected: action.value
        }
      case 'OPEN_BURGUER_MENU':
        return {
          ...state,
          isOpenBurguerMenu: action.value
        }
      case 'LOGIN':
        return {
          ...state,
          isLoged: action.value
        }
      case 'REVIEW_ORDER':
        return {
          ...state,
          reviewOrder: action.value
        }
      case 'CH_NAME_VALUE':
        return {
          ...state,
          nameValue: action.value
        }
      case 'CH_EMAIL_VALUE':
        return {
          ...state,
          emailValue: action.value
        }
      case 'CH_PASSWORD_VALUE':
        return {
          ...state,
          passwordValue: action.value
        }
      case 'CH_REPEAT_PASSWORD_VALUE':
        return {
          ...state,
          repeatPasswordValue: action.value
        }
      case 'THERE_IS_AN_ERROR':
        return {
          ...state,
          error: action.value
        }
      case 'ADD_USERS':
        return {
          ...state,
          users: action.value
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

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
