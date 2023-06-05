import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import './Card.css'

function Card ({ Category, title, price, images }) {
  const { addedProducts, setAddedProducts } = useContext(MyContext)

  return (
    <article className='relative border border-black cursor-pointer p-2 '>
      <img src={images} alt='' width='200' height='200' className='z-0 mb-5' />
      <button
        className='z-1 absolute w-8 h-8 bg-gray-300 top-1 right-2 rounded-lg'
        onClick={() => setAddedProducts(addedProducts + 1)}
      >
        +
      </button>
      <h2 className='z-1 absolute bottom-40 left-2 bg-gray-500  text-white'>
        {Category}
      </h2>
      <div className='flex justify-around  text-sm absolute bottom-0  gap-10 bg-white py-2 widthPrice'>
        <h3 className=' '> {title}</h3>
        <p className='font-bold text-sm  '>${price}</p>
      </div>
    </article>
  )
}

export { Card }
