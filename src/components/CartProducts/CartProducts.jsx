import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'

function CartProducts () {
  const { isOpenCart } = useContext(MyContext)

  const cartProductsStyle = `fixed w-custom-size h-full bg-gray-600 -right-custom-size top-20 transition  duration-500 transform ${
    isOpenCart ? '-translate-x-full' : 'translate-x-0'
  }`
  return <aside className={cartProductsStyle}>CartProducts</aside>
}

export { CartProducts }
