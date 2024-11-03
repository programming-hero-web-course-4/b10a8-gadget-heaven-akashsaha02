import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from './../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
