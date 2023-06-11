import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { useNavigate } from 'react-router-dom'

function SignUp () {
  const {
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    nameValue,
    setNameValue,
    repeatPasswordValue,
    setRepeatPasswordValue,
    addToLocalStorage,
    setUsers,
    users,
    error,
    setError
  } = useContext(MyContext)
  const navigate = useNavigate()

  const userExist = users.some((us) => {
    return us.email === emailValue
  })
  function sendForm () {
    const user = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      repeatPassword: repeatPasswordValue
    }

    if (
      user.name !== '' &&
      user.email !== '' &&
      user.password !== '' &&
      user.repeatPassword !== ''
    ) {
      if (user.password === user.repeatPassword) {
        if (userExist) {
          setError(['El email ya se encuentra registrado'])
        } else {
          if (error === '' || error === undefined) {
            setUsers([...users, user])
            navigate('/')
          }
        }
      } else {
        setError(['Las contraseñas deben coincidir'])
      }
    } else {
      setError('Por favor diligencia todos los campos')
    }
  }

  useEffect(() => {
    addToLocalStorage(users, 'users')
  }, [users])

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div className='p-10 border border-gray-400'>
        <h2 className='mb-10 text-center'>Sign Up</h2>
        <form className='flex flex-col gap-7'>
          <div className='flex w-full justify-between'>
            <label>Nombre:</label>
            <input
              type='text'
              name='name'
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value)
              }}
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={emailValue}
              onChange={(event) => {
                setEmailValue(event.target.value)
              }}
              required
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
              required
            />
          </div>
          <div className='flex w-full justify-between'>
            <label>Repeat password:</label>
            <input
              type='password'
              name='repeatPassword'
              value={repeatPasswordValue}
              onChange={(event) => {
                setRepeatPasswordValue(event.target.value)
              }}
              required
            />
          </div>
          <button
            type='button'
            onClick={() => {
              sendForm()
            }}
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
