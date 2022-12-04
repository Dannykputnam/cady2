import {Card, Modal, Button, Container, Row,Col, Image} from 'react-bootstrap'
import { AreaConsumer } from '../../providers/AreaProvider'
import { useState } from 'react'

const AreaShow = ({name, address, city, country, zip, mcontact, pic}) => {
  const [showing, setShow] = useState(false)
  
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {address} 
        </Card.Text>
        <Button 
          variant="primary"
          onClick={() => setShow(true)}
          >
          Select Studio
        </Button>

        <Modal show={showing} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                <h1>Is this your studio?</h1>
                Studio Contact: {mcontact}
                Address: {address}
                City: {city}
                Country: {country}
                Postal Code: {zip}
                <Button>Continue</Button>
                <Button>Edit</Button>
                <Button>Remove</Button>
                </Col>
                <Col>
                  <Image src={pic} width='100px'/>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
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