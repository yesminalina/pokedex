import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemonNames, setPokemonNames] = useState([])
  const [name, setName] = useState('')
  const [errorList, setErrorList] = useState('')

  // Consulta nombres de pokemones a la API
  const getPokemonNames = async () => {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      const response = await fetch(url)
      const data = await response.json()
      setPokemonNames(data.results.map(pokemon => pokemon.name))
    } catch (e) {
      setErrorList(e.message)
    }
  }

  // Renderiza los nombres en el select
  const renderOptions = pokemonNames.map(
    (name) => (<option key={name} value={name}>{name}</option>)
  )

  // Redirecciona programáticamente
  const navigate = useNavigate()
  const goToPokemon = () => {
    if (name) {
      navigate(`/characters/${name}`)
    } else {
      Swal.fire({
        text: 'Debes selecccionar un Pokemon!',
        confirmButtonColor: '#c52018'
      })
    }
  }

  // Setea el nombre pokemon seleccionado
  const selectPokemon = (name) => {
    setName(name)
  }

  const globalContext = {
    renderOptions,
    goToPokemon,
    selectPokemon,
    errorList
  }

  useEffect(() => {
    getPokemonNames()
  }, [])

  return (
    <PokemonContext.Provider value={globalContext}>
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonProvider
