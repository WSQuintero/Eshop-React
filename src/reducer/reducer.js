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

export { initialState, reducer }
