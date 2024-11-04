import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { useCart } from "../../context/CartContext/CartContext";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";

const NavBar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="px-4 sticky top-0 z-10">
      <div className="navbar max-w-7xl mx-auto bg-purple-600 rounded-t-xl mt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                <NavLink to="/extra" activeClassName="active">
                  Extra
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            ZENIN Tech
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
              <NavLink to="/extra" activeClassName="active">
                Extra
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
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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