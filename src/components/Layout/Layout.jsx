import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4">
                <Outlet />
                <Toaster />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
