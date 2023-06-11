import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { NavLink } from 'react-router-dom'

function SignIn () {
  const { emailValue, setEmailValue, passwordValue, setPasswordValue, users } =
    useContext(MyContext)

  const sendForm = (event) => {
    event.preventDefault()

    const validate = users
    console.log(event.target.email.value)
  }

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='p-10 border border-gray-400'>
        <h2 className='mb-10 text-center'>Sign In</h2>
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
          <button type='submit'>Sign In</button>
          <span>
            <NavLink to={'/sign-up'}>¿Aún no tienes cuenta?</NavLink>
          </span>
        </form>
      </div>
    </div>
  )
}

export { SignIn }
