import { Routes, Route} from 'react-router-dom';
import Home from './components/shared/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import InNavbar from './components/shared/InNavbar';
import Footer from './components/shared/Footer';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute'
import Areas from './components/areas/Areas';
import AreaForm from './components/areas/AreaForm';
import Assets from './components/assets/Assets';
import AssetNav from './components/assets/AssetNav';

const App = () => (
  <>
        <InNavbar/>
    {/* <MainNavbar/> */}
    <FetchUser>
        
      <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<ProtectedRoute />} >
        <Route path='/areas' element={<Areas />} />
        <Route path='/:id/updateArea' element={<AreaForm />} />
        <Route path='/:areaId/updateArea' element={<AreaForm />} />
        <Route path='/:areaId/assets' element={<Assets />} />
        <Route path='/:areaId/assetnav' element={<AssetNav />} />

          
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
      </>
    </FetchUser>
    <Footer />
  </>
)

export default App;
