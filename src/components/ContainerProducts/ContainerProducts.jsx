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
      {dataProducts.length !== 0
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
                images='https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952ty7k21jtadbdlu4aw3gj8zwct292jybunjxy3fzv&ep=v1_gifs_search&rid=200w.gif&ct=g'
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
