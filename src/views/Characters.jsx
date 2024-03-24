import { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import ErrorFetch from '../components/ErrorFetch'
import '../assets/css/characters.css'

const Characters = () => {
  const { renderOptions, goToPokemon, selectPokemon, errorList } = useContext(PokemonContext)

  useEffect(() => {
    selectPokemon('')
  }, [])

  return (
    <Container fluid className='character d-flex align-items-center'>
      <Container fluid className='d-flex flex-column w-50'>
        {errorList
          ? <ErrorFetch error={errorList} />
          : <Form>
            <h2 className='text-char'>Selecciona un Pokemon</h2>
            <Form.Group className='mb-3 d-flex flex-column'>
              <Form.Select className='mb-3' onChange={({ target }) => selectPokemon(target.value)}>
                <option>Pokemones</option>
                {renderOptions}
              </Form.Select>
              <Button variant='danger' size='lg' onClick={goToPokemon}>Ver Detalles</Button>
            </Form.Group>
            </Form>}
      </Container>
    </Container>
  )
}
export default Characters
