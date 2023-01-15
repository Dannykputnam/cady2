import { Link, useParams} from 'react-router-dom';
import { AssetConsumer } from '../../providers/AssetProvider';

const AssetNav = ({}) => {
  const { areaId } = useParams();
 
  return (
    <>
        <Link to ={`${areaId}/contacts`}>
        <li>Assets!</li>
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

