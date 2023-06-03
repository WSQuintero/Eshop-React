import { useEffect, useState } from 'react'
import { FetchAllProducts } from '../ApiCall/FetchAllProducts'

function useCallApi (route, page, nameCategory, idCategory) {
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    const finalDataAllProducts = async () => {
      const apiData = await FetchAllProducts(
        route,
        page,
        nameCategory,
        idCategory
      )
      setDataProducts(apiData)
    }
    finalDataAllProducts()
  }, [page])

  return { dataProducts }
}

export { useCallApi }
