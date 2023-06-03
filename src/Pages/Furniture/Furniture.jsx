import React from 'react'
import { ContainerProducts } from '../../components/ContainerProducts/ContainerProducts'

function Furniture () {
  return (
    <ContainerProducts
      route={'furniture'}
      nameCategory={'furniture'}
      idCategory={3}
    />
  )
}

export { Furniture }
