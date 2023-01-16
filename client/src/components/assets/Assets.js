import { AssetConsumer } from '../../providers/AssetProvider';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AssetList from './AssetList';
import {Container, Button, Modal } from 'react-bootstrap';
import Flash from '../shared/Flash';
import AssetForm from './AssetForm';

const Assets = ({ assets, getAllAssets, msgs, setMsgs}) => {
  const { areaId } = useParams();
  const[adding, setAdd] = useState(false)


  useEffect( () => {
    getAllAssets(areaId)
  }, [])

  return (
    <Container> 
      {msgs ?
      <Flash
      variant={msgs.variant}
      msg={msgs.msg}
      setErrors={setMsgs}
      />
      :
      null
      }
        <Button variant="primary" onClick={() => setAdd(true)}>
        Add Asset
      </Button>

      <Modal show={adding} onHide={() => setAdd(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
        <AssetForm />
        <AssetList
        assets={assets} />
        </Container>
    
   )
  }



const ConnectedAssets = (props) => (
  <AssetConsumer>
    { value => <Assets {...props} {...value} />}
  </AssetConsumer>
)

export default ConnectedAssets;