import AreaList from './AreaList';
import { useEffect } from 'react';
import { AreaConsumer } from '../../providers/AreaProvider';

const Areas = ({ areas, getAllAreas}) => {

  useEffect( () =>{
    getAllAreas()
  }, []) 

  return (
  <>
    <h1> All Studios</h1>
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