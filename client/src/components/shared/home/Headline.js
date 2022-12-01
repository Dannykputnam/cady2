import { Image, Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Headline = () => (
  <>
    <Image
    alt='cadyimage'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwWddiHfjEYWZCh83tYAvzA7jUvPuBGamxA&usqp=CAU'
    />
    <Container>
      <Row>
        <Col>
          <h1>Cady Caddy Online</h1>
        </Col>
        <Col>
        <p>
          Test test test
        </p>
        <Row>
          <Col>
            <Link to='/register'>
              <Button>
                Signup
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to='/login'>
              <Button>
                Login
              </Button>
            </Link>
          </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  </>
)

export default Headline