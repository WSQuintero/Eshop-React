import React, { useContext } from 'react'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { CardOrder } from '../Card/CardOrder'

function ContainerOrder ({ dataProducts }) {
  const { openProductDetail } = useContext(MyContext)

  return (
    <>
      <section
        className={`flex flex-wrap w-auto justify-around p-10 gap-10  relative overflow-hidden mt-10 z-0 ${
          openProductDetail[0] ? 'blur-md' : 'blur-none'
        }`}
      >
        {dataProducts.order?.map((product) => (
          <CardOrder
            key={product.title + product.Category}
            Category={product.Category}
            title={product.title}
            price={product.price}
            images={product.images}
            description={product.description}
          />
        ))}
      </section>
      <section>{openProductDetail[0] && <ProductDetail />}</section>
    </>
  )
}

export { ContainerOrder }
