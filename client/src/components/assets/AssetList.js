import { ListGroup, Container} from 'react-bootstrap';
import AssetShow from './AssetShow';
import {useState} from 'react';




const AssetList = ({ assets }) => {
  const [searchTerm,setSearchTerm] = useState('')
  return (
  <>
  
  <Container>
      <h1 class='text-center'>All Assets</h1>
      <div class="text-center">
        <input type="text" 
        placeholder="Search..." 
        onChange={event => {setSearchTerm(event.target.value)
        }} 
      />

      </div>
      <br />
      <ListGroup variant="flush">
        { assets.filter((a)=>{
          if (searchTerm == "") {
            return a
          } else if (a.barcode.toLowerCase().includes(searchTerm.toLowerCase())) {
            return a
          }
        }).map( a =>
        <AssetShow 
        key={a.id}
        {...a} 
        />
      )}
    </ListGroup>
  </Container>
  </>
  )
}

export default AssetList;