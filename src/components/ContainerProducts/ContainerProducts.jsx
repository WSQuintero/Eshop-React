import React, { useContext } from 'react'
import { Card } from '../Card/Card'
import { useCallApi } from '../../customHooks/useCallApi'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { MyContext } from '../../GeneralContext/GeneralContext'

function ContainerProducts ({ route, nameCategory, idCategory }) {
  const { dataProducts } = useCallApi(route, nameCategory, idCategory)
  const { openProductDetail } = useContext(MyContext)

  return (
    <>
      <section
        className={`flex flex-wrap w-auto justify-around p-20 gap-10  relative overflow-hidden mt-10 z-0 ${
          openProductDetail[0] ? 'blur-md' : 'blur-none'
        }`}
      >
        {dataProducts?.map((product) => (
          <Card
            key={product.title + product.category}
            Category={product.category}
            title={product.title}
            price={product.price}
            images={product.image}
            description={product.description}
          />
        ))}
      </section>
      <section>{openProductDetail[0] && <ProductDetail />}</section>
    </>
  )
}

export { ContainerProducts }
