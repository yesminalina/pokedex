import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import homeImg from '../assets/img/Pikachu-home.png'
import '../assets/css/home.css'

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className='text-center mt-5'>¡Bienvenido Maestro Pokemón!</h1>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <img className='mt-4 homeImg' src={homeImg} alt='Pikachu Home' width='500' />
        </Col>
      </Row>
    </Container>
  )
}
export default Home
