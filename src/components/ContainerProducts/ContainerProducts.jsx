import React, { useContext } from 'react'
import { Card } from '../Card/Card'
import { useCallApi } from '../../customHooks/useCallApi'
import { MyContext } from '../../GeneralContext/GeneralContext'

function ContainerProducts ({
  route,
  nameCategory,
  idCategory
}) {
  const { page, setPage } = useContext(MyContext)
  const { dataProducts } = useCallApi(route, page, nameCategory, idCategory)

  return (
    <>
      <main className='flex flex-wrap w-auto justify-around px-20 gap-10'>
        {dataProducts.map((product) => (
          <Card
            key={product.title}
            Category={product.category.name}
            title={product.title}
            price={product.price}
            images={product.images[0]}
          />
        ))}
      </main>
      <section>
        <div className='flex gap-10 mt-5'>
          <button onClick={() => setPage(page === 0 ? page : page - 12)}>
            Anterior
          </button>
          <button onClick={() => setPage(page + 12)}>siguiente</button>
        </div>
      </section>
    </>
  )
}

export { ContainerProducts }
