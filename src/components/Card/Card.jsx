import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { MdDeleteForever } from 'react-icons/md'
import { GrAddCircle } from 'react-icons/gr'
import { addOrDeleteProduct } from '../../logic/logic'

function Card ({ Category, title, price, images, description }) {
  const { productsAdd, setProductsAdd, setOpenProductDetail } =
    useContext(MyContext)

  const isInCart = productsAdd.findIndex((product) => product.title === title)
  const necessaryInformation = {
    Category,
    title,
    price,
    images,
    setProductsAdd,
    isInCart,
    productsAdd,
    description
  }

  return (
    <article className='relative border border-gray-400  w-60 px-3 py-6 h-70 rounded-3xl bg-white flex-shrink-0 '>
      <img
        src={images}
        alt=''
        className='z-0 mb-5 w-full h-size-img rounded-3xl cursor-pointer '
        onClick={() => {
          setOpenProductDetail([
            true,
            { Category, title, price, images, description }
          ])
        }}
      />
      <button
        className='z-1 absolute w-10 h-10 bg-gray-400 -top-4 -right-3 rounded-lg grid  place-content-center'
        onClick={() => {
          addOrDeleteProduct(necessaryInformation)
        }}
      >
        {isInCart !== -1 ? <MdDeleteForever /> : <GrAddCircle />}
      </button>
      <h2 className='z-1 absolute -top-5 -left-5 bg-gray-200  text-gray-700 p-3 w-40 rounded-md h-11'>
        {Category}
      </h2>
      <div className='flex justify-around text-xs absolute bottom-0  gap-10 bg-gray-200 p-2 w-[237px] left-0 rounded-full h-[50px] overflow-hidden place-content-center items-center'>
        <h3 className=''> {title.substring(0, 17)}</h3>
        <p className='font-bold text-sm  '>${price}</p>
      </div>
    </article>
  )
}

export { Card }
