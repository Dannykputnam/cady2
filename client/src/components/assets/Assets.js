import { AssetConsumer } from '../../providers/AssetProvider';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import AssetList from './AssetList'

const Assets = ({ assets, getAllAssets}) => {
  const { areaId } = useParams();

  useEffect( () => {
    getAllAssets(areaId)
  }, [])
  return (
    <>
        <AssetList
        assets={assets} />
    </>
  )
}


const ConnectedAssets = (props) => (
  <AssetConsumer>
    { value => <Assets {...props} {...value} />}
  </AssetConsumer>
)

export default ConnectedAssets;