import { ListGroup, Row, Col, Container, Button, Modal, Image} from 'react-bootstrap';
import {useState } from 'react';

const AssetShow = ({ id, name, description, barcode, price, pdate, status, img, category}) => {
  const [showing, setShow] =useState(false)
  return (
   <>
    <Container>
      <ListGroup.Item>
        <Row>
          <Col>
          <Image src={img} width='100px'/>
          </Col>
          <Col>
            {name}
          </Col>
          <Col>
            {status}
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => setShow(true)}>
                View
              </Button>

              <Modal show={showing} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Col>
                  <p>
                     Name: {name}
                  </p>
                  <p>
                    Description: {description}
                  </p>
                  <p>
                    Barcode: {barcode}
                  </p>
                  <p>
                     Price: {price}
                  </p>
                  <p>
                     Purchase Date: {pdate}
                  </p>
                  <p>
                    Category: {category}
                  </p>
                  <p>
                    Status: {status}
                  </p>
                  <p>
                    Status: {status}
                  </p>
                  </Col>
                  <Col>
                  <Image src={img} width='100px'/>
                </Col>
                  
                </Modal.Body>
                <Modal.Footer>
                  <Button >
                    Edit
                  </Button>
                  <br />
                  <Button >
                    Remove
                  </Button>
                </Modal.Footer>
              </Modal>
          </Col>
        </Row>
      </ListGroup.Item>

    </Container>

   </>
  )
}

export default AssetShow