import AreaShow from './AreaShow'
import {Container, Row, Col} from 'react-bootstrap'

const AreaList = ({ areas }) => (
<Container>
  <Row md='4' sm='12'>
  { areas.map( c =>
      <Col key={c.id}>
        <AreaShow 
        {...c}
        />
        </Col>
      )}
  </Row>
</Container>
  
)

export default AreaList