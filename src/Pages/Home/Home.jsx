import React, { useContext } from 'react'
import { ContainerProducts } from '../../components/ContainerProducts/ContainerProducts'
import { MyContext } from '../../GeneralContext/GeneralContext'

function Home () {
  const {
    state: { optionSelected },
    dispatch
  } = useContext(MyContext)
  return (
    <>
      <div className='pt-10 border-b border-dotted border-gray-800 relative top-[70px] pb-5'>
        <label
          htmlFor='sort'
          className='w-auto  rounded-md flex gap-10 justify-center border border-gray-300 p-2 font-bold text-xl  bg-gray-100  items-center'
        >
          Ordenar: {'  '}
          <select
            name='sort'
            id='sort'
            onChange={(e) => dispatch({ type: 'ORDER', value: e.target.value })}
            className='font-light bg-gray-200 p-2'
          >
            <option value='asc' className='font-light bg-gray-200 text-sm'>
              Ascendente
            </option>
            <option value='desc' className='font-light text-sm'>
              Descendente
            </option>
          </select>
        </label>
      </div>
      <ContainerProducts route={'home'} sort={optionSelected} />
    </>
  )
}

export { Home }
