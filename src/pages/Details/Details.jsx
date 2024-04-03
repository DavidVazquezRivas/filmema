import { useEffect, useState } from "react"
import getFilmDetails from "../../services/getFilmDetails"
import Spinner from "../../components/Spinner/Spinner"
import FilmInfo from "../../components/FilmInfo/FilmInfo"

export default function MovieDetails({ params }) {
  const { id, type } = params

  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getFilmDetails(id, type).then(res => {
      setDetails(res)
      setLoading(false)
    })
  },[id])

  return (
    <>
      { loading 
        ? <Spinner /> 
        : <FilmInfo film={details}/>
      }
    </>
  )
}