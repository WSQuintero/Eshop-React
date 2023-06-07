import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'

function ProductDetail () {
  const { openProductDetail, setOpenProductDetail } = useContext(MyContext)
  const { Category, title, price, images, description } = openProductDetail[1]

  return (
    <div className='fixed min-h-[100vh] w-[100%] flex justify-center bg-gray-800 bg-opacity-50  top-20 p-10 inset-0 pointer-events-none'>
      <div className='w-4/6 h-[75vh] rounded-3xl bg-white   flex justify-center items-center flex-col p-8 relative pointer-events-auto'>
        <h3 className='font-bold text-center text-lg'>{title}</h3>
        <img src={images} alt='' className='w-[150px] h-[160px] mt-5' />
        <span className='mt-3 absolute -top-8 p-2 -left-4 border-2 border-gray-400 bg-white rounded-lg'>
          {Category}
        </span>
        <span className='mt-4 text-lg'>
          <strong>{'Price: $'}</strong>
          {price}
        </span>
        <p className='text-sm overflow-scroll mt-4 '>{description}</p>
        <button
          className='w-[60px] h-[60px] absolute bg-gray-400 -top-6 -right-4 rounded-full text-white text-2xl '
          onClick={() => {
            setOpenProductDetail([false, {}])
          }}
        >
          X
        </button>
      </div>
    </div>
  )
}

export { ProductDetail }
