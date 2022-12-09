import {Card, Modal, Button, Container, Row,Col, Image} from 'react-bootstrap'
import { AreaConsumer } from '../../providers/AreaProvider'
import { useState } from 'react'
import { Link} from 'react-router-dom'

const AreaShow = ({id, name, address, city, country, zip, mcontact, pic, deleteArea}) => {
  const [showing, setShow] = useState(false)
  
  return (
    <>
      <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {address} 
        </Card.Text>
        <Button 
          variant="dark"
          onClick={() => setShow(true)}
          >
          Select Studio
        </Button>

        <Modal show={showing} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <h1 className='text-center'>Is this your studio?</h1>
                <br />
            <Container>
              <Row>
                <Col>
                <Row>
                Studio Contact: {mcontact}
                </Row> 
                <Row>
                Address: {address}
                </Row>
                <Row>
                City: {city}
                </Row>
                <Row>
                Country: {country}
                </Row>
                <Row>
                Postal Code: {zip}
                </Row>
                <br />
                <Button variant="outline-secondary" size="lg">Continue</Button>
                <br />
                <Link 
                  to={`/${id}/updateArea`}
                  state={{name, address, city, country, zip, mcontact, pic}}
                  > 
                <Button variant="outline-secondary"
                >Edit</Button>
                </Link>
                <br />
                <Button variant="outline-secondary"
                onClick={() => deleteArea(id)}
                >Remove</Button>
                </Col>
                <Col>
                  <Image src={pic} width='100px'/>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
    </>
  )
}

const ConnectedAreaShow = (props) => (
  <AreaConsumer>
    { value => <AreaShow {...props} {...value} />}
  </AreaConsumer>
)

export default ConnectedAreaShow;