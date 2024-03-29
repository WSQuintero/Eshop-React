import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../GeneralContext/GeneralContext'

function SignUp () {
  const navigate = useNavigate()

  const {
    state: { error, isUserAdd },
    validateNewUser,
    dispatch,
    addNewUserInFirebase,
    setOrders
  } = useContext(MyContext)
  const [user, setUser] = useState({})

  const sendForm = (event) => {
    event.preventDefault()
    const elements = event.target.elements
    const userData = {
      name: elements.name.value,
      email: elements.email.value,
      password: elements.password.value,
      repeatPassword: elements.repeatPassword.value
    }
    validateNewUser(userData)
    setOrders([])

    setUser(userData)
  }

  useEffect(() => {
    if (isUserAdd) {
      setTimeout(() => {
        navigate('/sign-in')
        dispatch({ type: 'IS_USER_ADD', value: false })
      }, 3000)
      addNewUserInFirebase(user)
    }
  }, [isUserAdd])

  if (error !== '') {
    setTimeout(() => {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: ''
      })
    }, 2000)
  }

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center '>
      <div className='p-10 border border-gray-400'>
        <h2 className='mb-10 text-center font-bold'>Create new account</h2>
        <form className='flex flex-col gap-7' onSubmit={sendForm}>
          <div className='flex w-full justify-between'>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              name='name'
              // value={nameValue}
              // onChange={(event) => {
              //   dispatch({ type: 'CH_NAME_VALUE', value: event.target.value })
              // }}
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              // value={emailValue}
              // onChange={(event) => {
              //   dispatch({ type: 'CH_EMAIL_VALUE', value: event.target.value })
              // }}
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              // value={passwordValue}
              // onChange={(event) => {
              //   dispatch({
              //     type: 'CH_PASSWORD_VALUE',
              //     value: event.target.value
              //   })
              // }}
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label htmlFor='repeatPassword'>Repeat password:</label>
            <input
              type='password'
              id='repeatPassword'
              name='repeatPassword'
              // value={repeatPasswordValue}
              // onChange={(event) => {
              //   dispatch({
              //     type: 'CH_REPEAT_PASSWORD_VALUE',
              //     value: event.target.value
              //   })
              // }}
              required
            />
          </div>
          <button
            type='submit'
            className='border border-gray-400 p-2 rounded-lg hover:bg-green-400 font-semibold hover:text-white'
          >
            Sign Up
          </button>
        </form>
        {error !== '' && (
          <span className='text-center flex justify-center text-red-500 w-[100%] font-bold p-2 mt-[20px]'>
            {error}
          </span>
        )}
      </div>
      {isUserAdd && (
        <div className='w-full h-full bg-gray-300/60 absolute grid place-content-center'>
          <div className='p-10 bg-gray-400 rounded-xl '>
            <p className='font-bold text-gray-200 text-2xl'>
              Usuario creado exitosamente
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export { SignUp }
