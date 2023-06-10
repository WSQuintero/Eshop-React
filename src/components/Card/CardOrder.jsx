import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'

function CardOrder ({ Category, title, price, images, description }) {
  const {
    setOpenProductDetail,
    setIsOpenCart

  } = useContext(MyContext)

  const colorsCategory = {
    "men's clothing": 'mensClothing',
    electronics: 'electronics',
    jewelery: 'jewelery',
    "women's clothing": 'womensClothing'
  }

  return (
    <article className='relative border border-gray-400  w-[200px] px-3 py-6 h-[250px] rounded-3xl bg-white flex-shrink-0 '>
      <img
        src={images}
        alt=''
        className='z-0 mb-5 w-full h-[200px] rounded-3xl cursor-pointer '
        onClick={() => {
          setOpenProductDetail([
            true,
            { Category, title, price, images, description }
          ])
          setIsOpenCart(false)
        }}
      />
      <h2
        id={colorsCategory[Category]}
        className='z-1 absolute -top-5 -left-5 bg-gray-200  text-gray-700 p-3 w-40 rounded-md h-11 font-bold'
      >
        {Category.charAt(0).toUpperCase() + Category.slice(1)}
      </h2>
      <div className='flex justify-around text-xs absolute bottom-0  gap-10 bg-gray-200 p-2 w-[100%] left-0 rounded-full h-[50px] overflow-hidden place-content-center items-center'>
        <h3 className=''> {title.substring(0, 17)}</h3>
        <p className='font-bold text-sm  '>${price}</p>
      </div>
    </article>
  )
}

export { CardOrder }
