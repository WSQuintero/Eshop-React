import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { Card } from '../Card/Card'

function CartProducts () {
  const { isOpenCart, productsAdd } = useContext(MyContext)

  const cartProductsStyle = ` flex  flex-col gap-10 rounded-3xl p-10 border-2 border-gray-400 ${
    productsAdd.length !== 0 ? 'justify-start' : 'justify-center text-white'
  } items-center place-content-center fixed 
  w-custom-size h-5/6 bg-white -right-custom-size top-20 transition overflow-auto duration-500 transform ${
    isOpenCart ? '-translate-x-full' : 'translate-x-0'
  }`

  return (
    <aside className={cartProductsStyle}>
      {productsAdd.length !== 0
        ? productsAdd.map((product) => {
          return (
          <Card
            key={product.title}
            Category={product.Category}
            title={product.title}
            price={product.price}
            images={product.images}
          />
          )
        })
        : <strong>No tienes productos agregados</strong>}
    </aside>
  )
}

export { CartProducts }
