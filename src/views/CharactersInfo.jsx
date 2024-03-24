import { useContext, useEffect } from 'react'
import { InfoContext } from '../context/InfoContext'
import { useParams } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'
import ErrorFetch from '../components/ErrorFetch'

const CharactersInfo = () => {
  const { getPokemonInfo, info, errorInfo } = useContext(InfoContext)
  const { name } = useParams()

  useEffect(() => {
    getPokemonInfo(name)
  }, [name])

  return (
    errorInfo
      ? <ErrorFetch error={errorInfo} />
      : <PokemonCard info={info} />
  )
}
export default CharactersInfo
