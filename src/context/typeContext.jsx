import React, { useState } from 'react'

const Context = React.createContext([])

export function TypeContextProvider({children}) {
  const [type, setType] = useState('movie')

  return <Context.Provider value={[type, setType]}>
    {children}
  </Context.Provider>
}

export default Context