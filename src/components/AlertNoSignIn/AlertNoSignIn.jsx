import React from 'react'

function AlertNoSignIn () {
  return (
    <>
      <div className='w-full h-full bg-bgCart absolute'></div>
      <div className='absolute w-4/5 h-[50vh] bg-gray-400 text-white font-bold flex justify-center items-center rounded-xl text-xl'>Por favor inicia sesión para comprar</div>
    </>
  )
}

export { AlertNoSignIn }
