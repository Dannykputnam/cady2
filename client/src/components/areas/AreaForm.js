import {useState, useEffect} from 'react';
import {AreaConsumer} from '../../providers/AreaProvider'
import {Button, Form} from 'react-bootstrap'
import {useParams, useLocation} from 'react-router-dom'
import Flash from '../shared/Flash'

const AreaForm = ({addArea, setAdd, updateArea, errors, setErrors}) => {
const [area, setArea] = useState({name: '', address: '', city: '', country: '', zip: '', mcontact: '', pic: ''})
const {id } = useParams();
const location = useLocation();

useEffect ( () => {
  if (id) {
    const {name, address, city, country, zip, mcontact, pic} = location.state
    setArea ({name, address, city, country, zip, mcontact, pic})
  }
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
    updateArea(id, area)
  } else {
    setAdd(false)
    addArea(area)
  }
  setArea({name: '', address: '', city: '', country: '', zip: '', mcontact: '', pic: ''})
}

  return (
  <>
   { errors ?
      <Flash
        variant={errors.variant}
        msg={errors.msg}
        setErrors={setErrors}
        />
      :null}
    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Label >Studio Name</Form.Label>
        <Form.Control 
          name='name'
          value={area.name}
          onChange={(e) => setArea({...area, name: e.target.value})}
          required
          autoFocus
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Address</Form.Label>
        <Form.Control 
          name='address'
          value={area.address}
          onChange={(e) => setArea({...area, address: e.target.value})}
          required
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>City</Form.Label>
        <Form.Control 
          name='city'
          value={area.city}
          onChange={(e) => setArea({...area, city: e.target.value})}
          required
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Country</Form.Label>
        <Form.Control 
          name='country'
          value={area.country}
          onChange={(e) => setArea({...area, country: e.target.value})}
          required
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Zip</Form.Label>
        <Form.Control 
          name='zip'
          value={area.zip}
          onChange={(e) => setArea({...area, zip: e.target.value})}
          required
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Studio Contact</Form.Label>
        <Form.Control 
          name='mcontact'
          placeholder='Main Contact for Studio'
          value={area.mcontact}
          onChange={(e) => setArea({...area, mcontact: e.target.value})}
          required
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Studio Picture</Form.Label>
        <Form.Control 
          name='pic'
          value={area.pic}
          onChange={(e) => setArea({...area, pic: e.target.value})}
          required
        />
      </Form.Group>
      <br />
      <div className="d-grid gap-2">
      <Button variant="secondary" type="submit" size="lg">
        Submit
      </Button>
      </div>
    </Form>
  </>
  )
}

const ConnectedAreaForm = (props) => (
<AreaConsumer>
{ value => <AreaForm {...props} {...value} />}
</AreaConsumer>
)

export default ConnectedAreaForm