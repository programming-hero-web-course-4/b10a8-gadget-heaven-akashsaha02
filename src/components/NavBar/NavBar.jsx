import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { useCart } from "../../context/CartContext/CartContext";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";

const NavBar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "bg-blue-100";
      case "/statistics":
        return "bg-blue-100";
      default:
        return "bg-white";
    }
  };

  return (
    <div className={`px-4 sticky top-0 z-10 ${getBackgroundColor()} shadow-md py-2`}>
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="pr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/statistics" activeClassName="active">
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" activeClassName="active">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" activeClassName="active">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-xl md:text-2xl font-bold">
            <span className="px-2 py-1 bg-blue-700 text-white rounded-lg">Blu</span> Gadgets
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" activeClassName="active">
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="active">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MdOutlineShoppingCart className="text-2xl" />
                <span className="badge badge-sm indicator-item">{totalQuantity}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{totalQuantity} Items</span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block" onClick={() => navigate('/dashboard')}>View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={() => navigate('/dashboard')}>
            <div className="indicator">
              <MdFavoriteBorder className="text-2xl" />
              <span className="badge badge-sm indicator-item">{wishlist.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;