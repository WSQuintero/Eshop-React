import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { useNavigate } from 'react-router-dom'

function SignUp () {
  const {
    state: {
      emailValue,
      passwordValue,
      nameValue,
      repeatPasswordValue,
      users,
      error
    },
    addToLocalStorage,
    dispatch
  } = useContext(MyContext)
  const navigate = useNavigate()

  const userExist = users.some((us) => {
    return us.email === emailValue
  })
  function sendForm () {
    const user = {
      name: String(nameValue),
      email: String(emailValue),
      password: String(passwordValue),
      repeatPassword: String(repeatPasswordValue)
    }

    if (
      user.name !== '' &&
      user.email !== '' &&
      user.password !== '' &&
      user.repeatPassword !== ''
    ) {
      if (user.password === user.repeatPassword) {
        if (userExist) {
          dispatch({ type: 'THERE_IS_AN_ERROR', value: 'El email ya se encuentra registrado' })
        } else {
          if (error === '' || error === undefined) {
            dispatch({ type: 'ADD_USERS', value: [...users, user] })
            navigate('/sign-in')
          }
        }
      } else {
        dispatch({
          type: 'THERE_IS_AN_ERROR',
          value: 'Las contraseñas deben coincidir'
        })
      }
    } else {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: 'Por favor diligencia todos los campos'
      })
    }
  }
  if (error !== '') {
    setTimeout(() => {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: ''
      })
    }, 2000)
  }
  useEffect(() => {
    addToLocalStorage(users, 'users')
  }, [users])

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='p-10 border border-gray-400'>
        <h2 className='mb-10 text-center font-bold'>Create new account</h2>
        <form className='flex flex-col gap-7'>
          <div className='flex w-full justify-between'>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={nameValue}
              onChange={(event) => {
                dispatch({ type: 'CH_NAME_VALUE', value: event.target.value })
              }}
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={emailValue}
              onChange={(event) => {
                dispatch({ type: 'CH_EMAIL_VALUE', value: event.target.value })
              }}
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={passwordValue}
              onChange={(event) => {
                dispatch({
                  type: 'CH_PASSWORD_VALUE',
                  value: event.target.value
                })
              }}
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label htmlFor='repeatPassword'>Repeat password:</label>
            <input
              type='password'
              id='repeatPassword'
              name='repeatPassword'
              value={repeatPasswordValue}
              onChange={(event) => {
                dispatch({
                  value: event.target.value
                })
              }}
              required
            />
          </div>
          <button
            type='button'
            onClick={() => {
              sendForm()
            }}
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
    </div>
  )
}

export { SignUp }
