import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { MdDeleteForever } from 'react-icons/md'
import { GrAddCircle } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

function Card ({ Category, title, price, images, description }) {
  const { dispatch, state, addOrDeleteProduct } = useContext(MyContext)

  const history = useNavigate()

  const isInCart = state.productsAdd.findIndex((product) => product.title === title)

  const colorsCategory = {
    "men's clothing": 'mensClothing',
    electronics: 'electronics',
    jewelery: 'jewelery',
    "women's clothing": 'womensClothing'
  }

  const handleClickImage = () => {
    dispatch({
      type: 'INFORMATION_PRODUCT_DETAIL',
      value: [
        true,
        { Category, title, price, images, description }
      ]

    })
    dispatch({
      type: 'CLOSE-CART'
    })
  }

  const handleClickButton = () => {
    const necessaryInformation = {
      Category,
      title,
      price,
      images,
      isInCart,
      productsAdd: state.productsAdd,
      description
    }
    addOrDeleteProduct(necessaryInformation)
  }

  const handleClickCategory = () => {
    history(
      Category === "men's clothing"
        ? "men'sClothing"
        : `/${Category.split(' ').join('-')}`
    )
  }

  return (
    <article className='relative border border-gray-400 w-60 px-3 py-6 h-70 rounded-3xl bg-white flex-shrink-0'>
      <img
        src={images}
        alt=''
        className='z-0 mb-5 w-full h-size-img rounded-3xl cursor-pointer'
        onClick={handleClickImage}
      />
      <button
        className={`z-1 text-gray-500 hover:text-gray-100 transition-all duration-2000 ease-in-out absolute w-10 h-10 bg-gray-300 -top-4 -right-3 rounded-lg grid place-content-center ${
          isInCart === -1
            ? 'hover:bg-green-400 hover:rounded-full hover:transform hover:rotate-180'
            : 'hover:bg-red-400'
        }`}
        onClick={handleClickButton}
      >
        {isInCart !== -1 ? <MdDeleteForever /> : <GrAddCircle />}
      </button>
      <h2
        onClick={handleClickCategory}
        id={colorsCategory[Category]}
        className='z-1 cursor-pointer absolute -top-5 -left-5 bg-gray-200 text-gray-700 p-3 w-40 transition-all duration-200 ease-in-out hover:w-[90%] rounded-md h-11 font-bold text-[12px]'
      >
        {Category.charAt(0).toUpperCase() + Category.slice(1)}
      </h2>
      <div className='flex justify-around text-xs absolute bottom-0 gap-10 bg-gray-200 p-2 w-[237px] left-0 rounded-full h-[50px] overflow-hidden place-content-center items-center'>
        <h3 className=''>{title.substring(0, 17)}</h3>
        <p className='font-bold text-sm'>${price}</p>
      </div>
    </article>
  )
}

export { Card }
