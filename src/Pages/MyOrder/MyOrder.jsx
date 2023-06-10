import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { ContainerOrder } from '../../components/ContainerOrder/ContainerOrder'

function MyOrder () {
  const { reviewOrder } = useContext(MyContext)
  const totalPrice = reviewOrder.order.reduce((a, b) => {
    return a + b.price
  }, 0)
  return (
    <section className='border border-gray-400 px-10 py-5  mt-[70px] rounded-2xl w-[98%]'>
      <p className='flex justify-between w-[100%] border-b  border-gray-500 pb-5'>
        <span className='font-bold'>
          Fecha de compra:{' '}
        </span>
        {reviewOrder.date}
        <span className='font-bold'>Hora de compra: </span>
        {reviewOrder.time}
      </p>
      <ContainerOrder dataProducts={reviewOrder}></ContainerOrder>
      <p className='font-bold text-start mt-6 border-t border-gray-400 p-3 text-2xl flex justify-between'>
        Precio total: <span className=' font-normal'> ${totalPrice}</span>
      </p>
    </section>
  )
}

export { MyOrder }
