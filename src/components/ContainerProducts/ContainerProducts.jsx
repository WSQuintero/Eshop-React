import React, { useContext } from 'react'
import { Card } from '../Card/Card'
import { useCallApi } from '../../customHooks/useCallApi'
import { CartProducts } from '../CartProducts/CartProducts'
import { MyContext } from '../../GeneralContext/GeneralContext'

function ContainerProducts ({
  route,
  nameCategory,
  idCategory
}) {
  const { dataProducts } = useCallApi(route, nameCategory, idCategory)
  const { isOpenCart } = useContext(MyContext)
  return (
    <main className='flex flex-wrap w-auto justify-around px-20 gap-10  relative overflow-hidden mt-20 z-0'>
      {dataProducts?.map((product) => (
        <Card
          key={product.title}
          Category={product.category}
          title={product.title}
          price={product.price}
          images={product.image}
        />
      ))}

      {isOpenCart ? <CartProducts /> : false}

    </main>
  )
}

export { ContainerProducts }
