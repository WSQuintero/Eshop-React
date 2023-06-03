import React, { createContext, useState } from 'react'

const MyContext = createContext()

function GeneralContext ({ children }) {
  const [page, setPage] = useState(0)
  return (
    <MyContext.Provider value={{ page, setPage }}>
      {children}
    </MyContext.Provider>
  )
}

export { GeneralContext, MyContext }
