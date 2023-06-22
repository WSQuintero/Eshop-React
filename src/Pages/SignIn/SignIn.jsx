import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { AlertNoSignIn } from '../../components/AlertNoSignIn/AlertNoSignIn'

function SignIn () {
  const {
    state: { emailValue, passwordValue, tryBuyWithoutLogIn, error, isLoged },
    dispatch,
    validateUserToLogIn

  } = useContext(MyContext)
  const history = useNavigate()
  if (error !== '') {
    setTimeout(() => {
      dispatch({
        type: 'THERE_IS_AN_ERROR',
        value: ''
      })
    }, 2000)
  }
  if (tryBuyWithoutLogIn) {
    setTimeout(() => {
      dispatch({ type: 'TRY_BUY_WITHOUT_LOGIN', value: false })
    }, 2000)
  }
  const sendForm = (event) => {
    event.preventDefault()
    validateUserToLogIn()
  }

  useEffect(() => {
    if (isLoged) {
      history('/')
    }
  }, [isLoged])

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='p-10 border border-gray-400'>
        <h2 className='mb-10 text-center font-bold'>Welcome</h2>
        <form className='flex flex-col gap-7' onSubmit={sendForm}>
          <div className='flex w-full justify-between'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={emailValue}
              onChange={(event) => {
                dispatch({
                  type: 'CH_EMAIL_VALUE',
                  value: event.target.value
                })
              }}
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
            />
          </div>
          <button
            type='submit'
            className='border border-gray-400 p-2 rounded-lg hover:bg-green-400 font-semibold hover:text-white'
            // disabled={validate === undefined}
          >
            Sign In
          </button>
          <span className='text-center'>
            <NavLink to={'/sign-up'}>¿Aún no tienes cuenta?</NavLink>
          </span>
        </form>
      </div>
      {tryBuyWithoutLogIn ? <AlertNoSignIn /> : false}
      {error !== ''
        ? (
        <span className='font-bold text-red-600 mt-4'>{error}</span>
          )
        : (
            false
          )}
    </div>
  )
}

export { SignIn }
