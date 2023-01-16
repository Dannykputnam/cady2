import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import Nav from 'react-bootstrap/Nav';


const MainNavbar = ({ user, handleLogout, areaId }) => {
  
  const rightNavItems = () => {
    // Links that show up if you are logged in
    if (user) {
      return (
        <>
        {/* <Link to ='/areas'>
          <li>Area</li>
        </Link>
        <Link to ={`${areaId}/contacts`}>
          <li>Contacts</li>
        </Link> */}
         <Nav.Link href="/areas">Areas</Nav.Link>
        <br />
        <br />
        <button type="button" class="btn btn-dark" onClick={() => handleLogout() }>
          Logout
        </button>
        </>
      )
    } else {
      // links that will show when you are not logged in
      return (
        <>
          <Link to='/login'>
            <li>Login</li>
          </Link>
          <Link to='/register'>
            <li>Signup</li>
          </Link>
        </>
      )
    }
  }
  return (
    <>
      <nav>
        <ul>
          {/* links that will show if you logged in or not */}
          {/* <Link to='/'>
            <li>Home</li>
          </Link> */}
          { rightNavItems()}
        </ul>
      </nav>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value}/>}
  </AuthConsumer>
)
export default ConnectedMainNavbar;
