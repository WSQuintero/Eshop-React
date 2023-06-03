async function FetchAllProducts (route, page, nameCategory, idCategory) {
  const routes = {
    home: `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=12`,
    category: `https://api.escuelajs.co/api/v1/categories/${idCategory}/products?offset=${page}&limit=12`,
    electronics: ''
  }

  const response = await fetch(
    route !== nameCategory ? routes[route] : routes.category
  )
  const responseJson = await response.json()
  return responseJson
}

export { FetchAllProducts }
