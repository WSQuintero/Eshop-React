import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { AlertNoSignIn } from '../../components/AlertNoSignIn/AlertNoSignIn'

function SignIn () {
  const {
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    users,
    setIsLoged,
    tryBuyWithoutLogIn,
    setTryBuyWithoutLogIn,
    error,
    setError,
    addToSesionStorage,
    setIsOpenCart
  } = useContext(MyContext)

  const history = useNavigate()
  if (error !== '') {
    setTimeout(() => {
      setError('')
    }, 2000)
  }
  if (tryBuyWithoutLogIn) {
    setTimeout(() => {
      setTryBuyWithoutLogIn(false)
    }, 2000)
  }
  const validate = users.find((user) => {
    return String(user.email) === String(emailValue)
  })
  const sendForm = (event) => {
    event.preventDefault()

    if (validate !== undefined) {
      if (String(validate.password) === String(passwordValue)) {
        setIsLoged(true)
        history('/')
        addToSesionStorage(validate, 'actualUser')
        setIsOpenCart(false)
      } else {
        setError('La contraseña no es correcta')
      }
    } else {
      setError('El usuario no se encuentra registrado')
    }
  }

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='p-10 border border-gray-400'>
        <h2 className='mb-10 text-center font-bold'>Welcome</h2>
        <form className='flex flex-col gap-7' onSubmit={sendForm}>
          <div className='flex w-full justify-between'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={emailValue}
              onChange={(event) => {
                setEmailValue(event.target.value)
              }}
            />
          </div>
          <div className='flex w-full justify-between'>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              value={passwordValue}
              onChange={(event) => {
                setPasswordValue(event.target.value)
              }}
            />
          </div>
          <button type='submit' className='border border-gray-400 p-2 rounded-lg hover:bg-green-400 font-semibold hover:text-white' disabled={validate === undefined}>Sign In</button>
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
