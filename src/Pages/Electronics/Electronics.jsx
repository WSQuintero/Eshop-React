import React from 'react'
import { ContainerProducts } from '../../components/ContainerProducts/ContainerProducts'

function Electronics () {
  return (
    <ContainerProducts
      route={'electronics'}
      nameCategory={'electronics'}
      idCategory={2}
    />
  )
}

export { Electronics }
