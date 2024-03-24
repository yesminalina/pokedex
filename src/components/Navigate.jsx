import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import icon from '../assets/img/pokeball-nav.png'

const Navigate = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'ms-4 text-decoration-none active' : 'ms-4 text-decoration-none notActive')
  return (
    <Navbar expand='md'>
      <Container>
        <Navbar.Brand>
          <img
            src={icon}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Nav>
          <NavLink className={setActiveClass} to='/'>Home</NavLink>
          <NavLink className={setActiveClass} to='/characters'>Personajes</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default Navigate
