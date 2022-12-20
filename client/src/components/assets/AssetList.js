import { ListGroup, Container} from 'react-bootstrap';
import AssetShow from './AssetShow';

const AssetList = ({ assets }) => (
  <>
  <Container>
      <h1>All Assets</h1>
      <ListGroup variant="flush">
        { assets.map( a =>
        <AssetShow 
        key={a.id}
        {...a} 
        />
      )}
    </ListGroup>
  </Container>
  </>
)

export default AssetList;