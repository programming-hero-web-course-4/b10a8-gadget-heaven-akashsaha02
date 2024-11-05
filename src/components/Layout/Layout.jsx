import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <NavBar />
            <div>
                <div className="max-w-7xl mx-auto px-2 xl:px-0">
                    <Outlet />
                    <Toaster />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
