import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogOut () {
  const history = useNavigate()
  return (
    <div className='w-full h-[100vh] flex items-center justify-center flex-col '>
      <p className='font-bold text-2xl'>Has finalizado sesión</p>
      <button
      className='p-3 border border-gray-400 rounded-lg mt-10 font-semibold'
        onClick={() => {
          history('/sign-in')
        }}
      >SignIn</button>
    </div>
  )
}

export { LogOut }
