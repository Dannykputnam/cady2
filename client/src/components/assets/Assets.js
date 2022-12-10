import { AssetConsumer } from '../../providers/AssetProvider';

const Assets = ({ }) => {
  return (
    <>

    </>
  )
}


const ConnectedAssets = (props) => (
  <AssetConsumer>
    { value => <Asset {...props} {...value} />}
  </AssetConsumer>
)

export default ConnectedAssets;