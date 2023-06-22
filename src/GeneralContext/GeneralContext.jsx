import React, { createContext, useReducer, useState } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import { auth, app } from '../services/firebase'
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc
} from 'firebase/firestore'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const firestore = getFirestore(app)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isUserAdd, setIsUserAdd] = useState(false)
  const addToLocalStorage = (toAdd, nameToAdd) => {
    localStorage.setItem(nameToAdd, JSON.stringify(toAdd))
  }
  const addToSesionStorage = (toAdd, nameToAdd) => {
    sessionStorage.setItem(nameToAdd, JSON.stringify(toAdd))
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
  const userExist = state.users.some((us) => {
    return us.email === state.emailValue
  })

  const user = {
    name: String(userExist.nameValue), // corregir
    email: String(state.emailValue),
    password: String(state.passwordValue),
    repeatPassword: String(state.repeatPasswordValue)
  }

  function validateNewUser () {
    if (!(user.name && user.email && user.password && user.repeatPassword)) {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'Por favor diligencia todos los campos'
      })
    } else if (user.password !== user.repeatPassword) {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'Las contraseñas deben coincidir'
      })
    } else if (userExist) {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'El email ya se encuentra registrado'
      })
    } else if (user.password.length < 6) {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'la contraseña debe tener como mínimo 6 caracteres'
      })
    } else {
      addUser()
    }
  }

  async function addUser () {
    try {
      // const newUserCredential =
      await createUserWithEmailAndPassword(auth, user.email, user.password)
      // const newUser = newUserCredential.user
      dispatch({ type: 'ADD_USERS', value: [...state.users, user] })
      setIsUserAdd(true)
    } catch (error) {
      console.log('Error al crear el usuario:', error.message)
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: error.message.includes('already')
          ? 'El usuario ya se encuentra registrado'
          : 'Error al crear el usuario, por favor vaida la información'
      })
    }
  }

  async function addNewUserInFirebase () {
    try {
      const usersRef = collection(firestore, 'usuarios')
      const docId = user.email // ID personalizado del documento
      await setDoc(doc(usersRef, docId), { name: user.name, email: user.email })
      console.log('Documento creado con ID:', docId)
    } catch (error) {
      console.error('Error al crear el documento:', error)
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'Error al crear el usuario, por favor vaida la información'
      })
    }
  }

  // Llamada a la función asincrónica
  async function validateUserToLogIn () {
    try {
      // const userCredential =
      await signInWithEmailAndPassword(
        auth,
        state.emailValue,
        state.passwordValue
      )
      dispatch({ type: 'LOGIN', value: true })
      addToSesionStorage({ name: user.name, email: user.email }, 'actualUser')
      dispatch({ type: 'CH_CART', value: false })
      // Realiza las acciones adicionales después del inicio de sesión exitoso
    } catch (error) {
      console.log('Error al iniciar sesión:', error.message)
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: error.message.includes('wrong-password')
          ? 'La contraseña no es correcta'
          : error.message.includes('user-not-found')
            ? 'El usuario no se encuentra registrado'
            : false
      })
      // Realiza las acciones correspondientes al manejo de errores
    }
  }

  async function getUserById (docId) {
    try {
      const usersRef = collection(firestore, 'usuarios')
      const docSnap = await getDoc(doc(usersRef, docId))

      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log('El documento no existe')
        return
      }
    } catch (error) {
      console.error('Error al obtener el documento:', error)
    }
  }

  async function addImageInFireStore (users, nameToAdd, id) {
    try {
      // Actualizar el documento en Firestore
      const usersRef = collection(firestore, 'usuarios')
      const userId = id // Reemplaza 'ID_DEL_USUARIO' con el ID correspondiente
      const userDocRef = doc(usersRef, userId)
      await setDoc(userDocRef, users)

      console.log('Usuarios actualizados en Firestore')
    } catch (error) {
      console.error('Error al actualizar los usuarios en Firestore:', error)
    }
  }
  // Llamada a la función para obtener los datos de un usuario por su ID

  return (
    <MyContext.Provider
      value={{
        addOrDeleteOrders,
        addToLocalStorage,
        addOrDeleteProduct,
        addToSesionStorage,
        dispatch,
        validateNewUser,
        isUserAdd,
        setIsUserAdd,
        state,
        validateUserToLogIn,
        addNewUserInFirebase,
        getUserById,
        addImageInFireStore
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
