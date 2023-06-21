import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { useCallApi } from '../../customHooks/useCallApi'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { MyContext } from '../../GeneralContext/GeneralContext'

function ContainerProducts ({ route, nameCategory, sort }) {
  const { dataProducts } = useCallApi(route, nameCategory, sort)
  const { state: { openProductDetail } } = useContext(MyContext)
  const [isCharged, setIsCharged] = useState(false)

  const temporal = Array(5).fill('*')
  useEffect(() => {
    setIsCharged(true)
  }, [dataProducts])

  return (
    <>
      {isCharged
        ? (
        <>
          <section
            className={`flex flex-wrap  justify-around  items-start gap-10  relative  z-0 w-full mt-40 ${
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
                isCharged={isCharged}
              />
            ))}
          </section>
          <section>{openProductDetail[0] && <ProductDetail />}</section>
        </>
          )
        : (
        <>
          <section
            className={`flex flex-wrap  justify-around  items-start gap-10  relative  z-0 w-full mt-40 ${
              openProductDetail[0] ? 'blur-md' : 'blur-none'
            }`}
          >
            {temporal?.map((product, index) => (
              <Card
                key={index}
                Category={'product.category'}
                title={'product.title'}
                price={'$500'}
                images='https://interaxiona.com/wp-content/uploads/2018/08/cargando-loading-043.gif'
                description={'product.description'}
                isCharged={isCharged}
              />
            ))}
          </section>
        </>
          )}
    </>
  )
}

export { ContainerProducts }
