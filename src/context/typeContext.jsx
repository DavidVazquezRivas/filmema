import React, { useState } from 'react'
import { useLocation } from 'wouter'

const Context = React.createContext([])

export function TypeContextProvider({children}) {
  const [location, setLocation] = useLocation()
  const [type, setType] = useState(() => {
    return location.includes('/tv') ? 'tv' : 'movie'
  })

  return <Context.Provider value={[type, setType]}>
    {children}
  </Context.Provider>
}

export default Context