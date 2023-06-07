import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { Card } from '../Card/Card'

function CartProducts () {
  const { isOpenCart, productsAdd } = useContext(MyContext)

  const cartProductsStyle = ` fixed top-0  flex flex-col h-[86vh]  rounded-3xl p-7 border-2 border-gray-400   ${
    productsAdd.length !== 0 ? 'justify-start' : 'justify-center text-white'
  } items-center place-content-center fixed 
  w-[350px] h-5/6 bg-gray-50 -right-custom-size top-20 transition  duration-500 transform ${
    isOpenCart ? '-translate-x-[350px]' : 'translate-x-10'
  }`

  return (
    <aside className={cartProductsStyle}>
      {productsAdd.length !== 0 && (
        <h3 className='font-bold text-gray-600 text-lg'>¿ lISTO PARA COMPRAR ?</h3>
      )}
      <div className='flex  overflow-scroll w-[100%] p-10 gap-10 relative'>
        {productsAdd.length !== 0
          ? (
              productsAdd.map((product) => {
                return (
                  <React.Fragment key={product.title}>
                    <Card
                      Category={product.Category}
                      title={product.title}
                      price={product.price}
                      images={product.images}
                      description={product.description}
                    />
                  </React.Fragment>
                )
              })
            )
          : (
          <strong className='text-gray-800 text-center '>No tienes productos agregados</strong>
            )}
      </div>
      {productsAdd.length !== 0 && (
        <button className='w-auto h-10 border border-gray-400 rounded-full  p-5 flex justify-center items-center bg-white text-gray-800 font-bold'>
          Ir a pagar
        </button>
      )}
    </aside>
  )
}

export { CartProducts }
