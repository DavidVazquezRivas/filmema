import React, { useState, useEffect } from 'react'
import { getGenresMap } from '../services/getGenresMap'

const Context = React.createContext([])

export function GenresContextProvider({children}) {
  const [genresMap, setGenresMap] = useState({})

  useEffect(() => {
    getGenresMap().then(map => {
      setGenresMap(map)
    })
  }, [])

  return <Context.Provider value={genresMap}>
    {children}
  </Context.Provider>
}

export default Context