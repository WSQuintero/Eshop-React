import React, { createContext, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const [addedProducts, setAddedProducts] = useState(0)
  return (
    <MyContext.Provider value={{ addedProducts, setAddedProducts }}>
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
