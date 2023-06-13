import React from 'react'

function AlertNoSignIn () {
  return (
    <>
      <div className='w-full h-full bg-bgCart absolute flex justify-center items-center '></div>
      <div className='absolute w-4/5 h-[50vh] bg-gray-400 text-yellow-100 font-bold border-2 border-yellow-100 flex justify-center text-center items-center rounded-xl text-xl'>
        Por favor inicia sesión para comprar
      </div>
    </>
  )
}

export { AlertNoSignIn }
