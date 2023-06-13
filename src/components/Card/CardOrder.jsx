import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'

function CardOrder ({ Category, title, price, images, description }) {
  const { setOpenProductDetail, setIsOpenCart } = useContext(MyContext)

  const colorsCategory = {
    "men's clothing": 'mensClothing',
    electronics: 'electronics',
    jewelery: 'jewelery',
    "women's clothing": 'womensClothing'
  }

  const handleClickImage = () => {
    setOpenProductDetail([
      true,
      { Category, title, price, images, description }
    ])
    setIsOpenCart(false)
  }

  return (
    <article className='card-order'>
      <img
        src={images}
        alt=''
        className='card-order-image'
        onClick={handleClickImage}
      />
      <h2 id={colorsCategory[Category]} className='card-order-category'>
        {Category.charAt(0).toUpperCase() + Category.slice(1)}
      </h2>
      <div className='card-order-details'>
        <h3>{title.substring(0, 17)}</h3>
        <p className='card-order-price'>${price}</p>
      </div>
    </article>
  )
}

export { CardOrder }
