import React, { useContext } from 'react'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { CardOrder } from '../Card/CardOrder'

function ContainerOrder ({ dataProducts }) {
  const { state: { openProductDetail } } = useContext(MyContext)

  return (
    <>
      <section
        className={`flex h-[320px] items-center w-auto justify-start px-10 gap-10  relative  mt-10 z-0 overflow-scroll ${
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
