import React from 'react'
import { Card } from '../Card/Card'
import { useCallApi } from '../../customHooks/useCallApi'

function ContainerProducts ({
  route,
  nameCategory,
  idCategory
}) {
  const { dataProducts } = useCallApi(route, nameCategory, idCategory)

  return (

      <main className='flex flex-wrap w-auto justify-around px-20 gap-10 mt-10'>
        {dataProducts?.map((product) => (
          <Card
            key={product.title}
            Category={product.category}
            title={product.title}
            price={product.price}
            images={product.image}
          />
        ))}
      </main>
  )
}

export { ContainerProducts }
