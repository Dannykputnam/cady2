import { AssetConsumer } from '../../providers/AssetProvider';
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';

const AssetNav = ({}) => {
  const { areaId } = useParams();
 
  return (
    <>
        <Link to ={`${areaId}/assets`}>
        <li>Assets</li>
        </Link>
    </>
  )
}


const ConnectedAssetNav = (props) => (
  <AssetConsumer>
    { value => <AssetNav {...props} {...value} />}
  </AssetConsumer>
)

export default ConnectedAssetNav;