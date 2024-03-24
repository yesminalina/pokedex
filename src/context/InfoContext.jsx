import { createContext, useState } from 'react'

export const InfoContext = createContext()

const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState({
    name: '',
    type: '',
    img: '',
    stats: []
  })
  const [errorInfo, setErrorInfo] = useState('')

  const getPokemonInfo = async (pokemon) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
      const response = await fetch(url)
      const data = await response.json()
      setInfo({ name: data.name, type: data.types[0].type.name, img: data.sprites.other.home.front_default, stats: data.stats.map((stat) => [stat.stat.name, stat.base_stat]) })
    } catch (e) {
      setErrorInfo(e.message)
    }
  }

  return (
    <InfoContext.Provider value={{ getPokemonInfo, info, errorInfo }}>
      {children}
    </InfoContext.Provider>
  )
}
export default InfoProvider
