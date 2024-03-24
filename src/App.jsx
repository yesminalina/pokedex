import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonProvider from './context/PokemonContext'
import InfoProvider from './context/InfoContext'
import Navigate from './components/Navigate'
import Home from './views/Home'
import Characters from './views/Characters'
import CharactersInfo from './views/CharactersInfo'
import NotFound from './views/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <PokemonProvider>
          <InfoProvider>
            <Navigate />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/characters' element={<Characters />} />
              <Route path='/characters/:name' element={<CharactersInfo />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </InfoProvider>
        </PokemonProvider>
      </BrowserRouter>
    </>
  )
}

export default App
