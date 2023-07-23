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
  const [resOrders, setResOrders] = useState([])
  const [actualUser2, setActualUser2] = useState({})
  const [orders, setOrders] = useState([])
  const user = {
    name: String(state.nameValue), // corregir
    email: String(state.emailValue)
  }
  const [isOpenBurguerMenu, setIsOpenBurguerMenu] = useState(false)

  const readUserInSesionStorage = () => {
    const user = JSON.parse(sessionStorage.getItem('actualUser'))
    return user
  }
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
  const addOrDeleteOrders = (orders, toAdd) => {
    const isInOrders = orders.orders?.findIndex((order) => order.time === toAdd.time)
    if (isInOrders === -1) return
    if (isInOrders !== -1) {
      const duplicatedOrders = [...orders.orders]
      duplicatedOrders.splice(isInOrders, 1)
      setUserInFirebase({ ...orders, orders: duplicatedOrders }, toAdd.email)
      setResOrders({ ...orders, orders: duplicatedOrders })
    }
  }
  const validateNewUser = (userCredential) => {
    if (!(userCredential.name && userCredential.email && userCredential.password && userCredential.repeatPassword)) {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'Por favor diligencia todos los campos'
      })
    } else if (userCredential.password !== userCredential.repeatPassword) {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'Las contraseñas deben coincidir'
      })
    } else if (userCredential.password.length < 6) {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'la contraseña debe tener como mínimo 6 caracteres'
      })
    } else {
      addUser(userCredential)
    }
  }
  const addUser = async (userCredential) => {
    try {
      // const newUserCredential =
      await createUserWithEmailAndPassword(
        auth,
        userCredential.email,
        userCredential.password
      )
      // const newUser = newUserCredential.user
      dispatch({ type: 'ADD_USERS', value: [...state.users, userCredential] })
      dispatch({ type: 'IS_USER_ADD', value: true })
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
  const addNewUserInFirebase = async (userData) => {
    try {
      const usersRef = collection(firestore, 'usuarios')
      const docId = userData.email // ID personalizado del documento
      await setDoc(doc(usersRef, docId), {
        name: userData.name,
        email: userData.email
      })
      console.log('Documento creado con ID:', docId)
    } catch (error) {
      console.error('Error al crear el documento:', error)
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'Error al crear el usuario, por favor vaida la información'
      })
    }
  }
  const validateUserToLogIn = async () => {
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
  const getUserById = async (docId) => {
    try {
      const usersRef = collection(firestore, 'usuarios')
      const docSnap = await getDoc(doc(usersRef, docId))

      if (docSnap.exists()) {
        setActualUser2(docSnap.data())
        return docSnap.data()
      } else {
        console.log('El documento no existe')
        return
      }
    } catch (error) {
      console.error('Error al obtener el documento:', error)
    }
  }
  const setUserInFirebase = async (users, id) => {
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

  return (
    <MyContext.Provider
      value={{
        addOrDeleteOrders,
        addToLocalStorage,
        addOrDeleteProduct,
        addToSesionStorage,
        dispatch,
        validateNewUser,
        state,
        validateUserToLogIn,
        addNewUserInFirebase,
        actualUser2,
        setUserInFirebase,
        getUserById,
        resOrders,
        setResOrders,
        orders,
        setOrders,
        readUserInSesionStorage,
        isOpenBurguerMenu,
        setIsOpenBurguerMenu
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
