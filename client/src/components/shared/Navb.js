import { Link, useParams} from 'react-router-dom';
import { AssetConsumer } from '../../providers/AssetProvider';

const AssetNav = ({}) => {
  const { areaId } = useParams();
 
  return (
    <>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    {/* <a class="nav-link active" aria-current="page" href="#">Active</a> */}
        <Link class="nav-link active" aria-current="page" to ={`${areaId}/assets`}>
        <li>Assets</li>
        </Link>
  </li>
  <li class="nav-item">
    {/* <a class="nav-link" href="#">Link</a> */}
        <Link class="nav-link" to ={`${areaId}/contacts`}>
        <li>Contacts</li>
        </Link>
  </li>
  <li class="nav-item">
    {/* <a class="nav-link" href="#">Link</a> */}
        <Link class="nav-link"  to ={`${areaId}/sets`}>
        <li>Set Builder</li>
        </Link>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
    </>
  )
}


const ConnectedAssetNav = (props) => (
  <AssetConsumer>
    { value => <AssetNav {...props} {...value} />}
  </AssetConsumer>
)



export default ConnectedAssetNav;

