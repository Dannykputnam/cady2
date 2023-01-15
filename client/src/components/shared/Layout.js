import { Outlet } from 'react-router-dom';
import Navb from "./Navb";

const Layout = () => (
    <>
    <Navb />
    <Outlet />
    </>
)

export default Layout;