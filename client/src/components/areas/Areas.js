import AreaList from './AreaList';
import { useEffect, useState} from 'react';
import { AreaConsumer } from '../../providers/AreaProvider';
import AreaForm from './AreaForm';
import { Button, Modal} from 'react-bootstrap';

const Areas = ({ areas, getAllAreas}) => {
  const [adding, setAdd] = useState(false)

  useEffect( () =>{
    getAllAreas()
  }, []) 

  return (
  <>
  

      <Modal show={adding} onHide={() => setAdd(false)}>
          <div className="text-center">
        <Modal.Header closeButton>
          <Modal.Title >Add Studio</Modal.Title>
        </Modal.Header>
          </div>
        <Modal.Body>
          <AreaForm 
            setAdd={setAdd}/>
        </Modal.Body>
    
      </Modal>

    <h1 className="text-center"> All Studios</h1>
    <div className="text-center" >
    <Button variant="dark"
    onClick={() => setAdd(true)}
    >
      +
      </Button>
      </div>
      <br />
    <AreaList 
    areas={areas}/>
  </>
  )
}

const ConnectedAreas = (props) => (
  <AreaConsumer>
  {value => <Areas {...props} {...value} /> }
  </AreaConsumer>
)

export default ConnectedAreas;