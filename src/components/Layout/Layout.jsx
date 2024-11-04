import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from '../Footer/Footer';


const Layout = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
