import React, {useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const AssetContext = React.createContext();

export const AssetConsumer = AssetContext.Consumer;

const AssetProvider = ({ children }) => {
  const [assets, setAssets] = useState([])
  const [errors, setErrors] = useState([null])
  const navigate = useNavigate()

  const getAllAssets = (areaId) => {
    axios.get(`/api/areas/${areaId}/assets`)
    .then (res => setAssets(res.data))
    .catch(err => {
      setErrors({
        variant: 'danger',
        msg: err.response.data.errors.full_messages[0]
      })
    })
  }

  const addAsset = (areaId, asset) => {
    axios.post(`/api/areas/${areaId}/assets`, { asset })
      .then ( res => setAssets([...assets, res.data]))
      .catch(err => {
        setErrors({
        variant: 'danger',
        msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
      })
    })
  }

  const updateAsset = (areaId, id, asset) => {
    axios.put (`/api/areas/${areaId}/assets/${id}`, {asset})
    .then ( res => {
      const newUpdatedAssets = assets.map(a => {
        if (a.id !== id) {
          return res.data 
        }
        return a
      })
      setAssets(newUpdatedAssets)
    })
      .catch(err => {
        setErrors({
        variant: 'danger',
        msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
      })
    })
  }

   const deleteAsset = (areaId, id) => {
     axios.delete(`/api/areas/${areaId}/assets/${id}`)
     .then (res => {
       setAssets(assets.filter(a => a.id !== id))
     })
     .catch(err => {
      setErrors({ 
        variant: 'danger',
        msg: err.response.data.errors[0]
      })
    })
   }

  return (
    <AssetContext.Provider value={{
      assets,
      errors,
      setErrors,
      getAllAssets,
      addAsset,
      updateAsset,
      deleteAsset,
      navigate
    }}>
    {children}
    </AssetContext.Provider>
  )
}
export default AssetProvider;