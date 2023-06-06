function addOrDeleteProduct ({
  Category,
  title,
  price,
  images,
  setProductsAdd,
  isInCart,
  productsAdd
}
) {
  if (isInCart === -1) {
    setProductsAdd([
      ...productsAdd,
      {
        images,
        Category,
        title,
        price
      }
    ])
  } else {
    const productsInCart = [...productsAdd]
    productsInCart.splice(isInCart, 1)
    setProductsAdd(productsInCart)
  }
}

export { addOrDeleteProduct }
