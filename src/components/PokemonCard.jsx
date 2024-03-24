import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import '../assets/css/pokemonCard.css'

const PokemonCard = ({ info }) => {
  const renderStats = info.stats.map((stat) => <ListGroup.Item key={stat[0]}>{stat[0]}: {stat[1]}</ListGroup.Item>)
  return (
    <Card className='container w-50 mt-5 card p-5 mb-5 border border-3 rounded-4'>
      <Row className='mt-5 d-flex align-items-center g-0 row row-cols-1 row-cols-md-2'>
        <Col>
          <Card.Img className='text-center' src={info.img} />
        </Col>
        <Col>
          <Card.Body className='text-center mt-3'>
            <Card.Title className='title fw-bold'>{info.name}</Card.Title>
            <ListGroup className='list-group-flush mt-3'>
              {renderStats}
            </ListGroup>
            <h2>
              <Badge pill bg='warning mt-3'>
                {info.type}
              </Badge>
            </h2>
          </Card.Body>
        </Col>
      </Row>

    </Card>
  )
}
export default PokemonCard
