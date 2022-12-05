import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom'

export const AreaContext = React.createContext();

export const AreaConsumer = AreaContext.Consumer;

const AreaProvider = ({ children}) => {
  const [areas, setAreas] = useState ([])
  const [errors, setErrors] = useState(null)
  const navigate =useNavigate()

  const getAllAreas= () => {
    axios.get('/api/areas')
    .then(res => setAreas(res.data))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors.full_messages[0]
      })
    })
  }

  const addArea = (area) => {
    axios.post('/api/areas', {area})
    .then(res => setAreas([...areas, res.data]))
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors.full_messages[0]
      })
    })
  }

  const updateArea = (id, area) => {
    axios.put(`/api/areas/${id}`,{ area })
    .then( res => {
      const newUpdatedAreas = areas.map (c => {
        if (c.id == id) {
          return res.data
        }
        return c
      })
      setAreas(newUpdatedAreas)
      navigate('/areas')
    })
  }

  const deleteArea = (id) => {
    axios.delete(`/api/areas/${id}`)
    .then(res => {
      setAreas(areas.filter(c => c.id !== id))
      })
      .catch(err => {
        setErrors({
          variant: 'danger',
          msg: err.response.data.errors.full_messages[0]
      })
    })
  }


  return (
    <AreaContext.Provider value={{
      areas,
      errors,
      setErrors,
      getAllAreas,
      addArea,
      updateArea,
      deleteArea,

    }}>
      { children}
      </AreaContext.Provider>
  )
}

export default AreaProvider;