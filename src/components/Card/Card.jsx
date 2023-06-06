import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { MdDeleteForever } from 'react-icons/md'
import { GrAddCircle } from 'react-icons/gr'
import { addOrDeleteProduct } from '../../logic/logic'

function Card ({ Category, title, price, images }) {
  const { productsAdd, setProductsAdd } = useContext(MyContext)

  const isInCart = productsAdd.findIndex((product) => product.title === title)
  const necessaryInformation = {
    Category,
    title,
    price,
    images,
    setProductsAdd,
    isInCart,
    productsAdd
  }
  return (
    <article className='relative border border-black cursor-pointer  w-60 px-0 h-80 rounded-3xl bg-gray-100 '>
      <img
        src={images}
        alt=''
        className='z-0 mb-5 w-full h-size-img rounded-3xl'
      />
      <button
        className='z-1 absolute w-8 h-8 bg-gray-300 top-1 right-2 rounded-lg grid  place-content-center'
        onClick={() => {
          addOrDeleteProduct(necessaryInformation)
        }}
      >
        {isInCart !== -1 ? <MdDeleteForever /> : <GrAddCircle />}
      </button>
      <h2 className='z-1 absolute bottom-20 left-2 bg-gray-200  text-gray-700 p-3 w-40 rounded-md h-11'>
        {Category}
      </h2>
      <div className='flex justify-around text-xs absolute bottom-0  gap-10 bg-white p-4 w-full  rounded-3xl h-20 overflow-hidden '>
        <h3 className='h-8 '> {title}</h3>
        <p className='font-bold text-sm  '>${price}</p>
      </div>
    </article>
  )
}

export { Card }
