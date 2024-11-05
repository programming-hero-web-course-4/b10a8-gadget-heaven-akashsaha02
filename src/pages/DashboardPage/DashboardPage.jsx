import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import WishList from '../../components/WishList/WishList';
import toast from 'react-hot-toast';

const DashboardPage = () => {
    const { cart } = useCart();
    const [activeTab, setActiveTab] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const { setCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.title = 'Blu Gadgets | Dashboard';
    }, [location]);

    const handlePurchase = () => {
        setShowModal(true);
        toast.success('Purchase Successful');
    };

    const closeModal = () => {
        setCart([]);  // Empty the cart
        setShowModal(false);
        navigate('/');  // Redirect to homepage
        toast.success('Thank you for shopping with us!');

    };
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div>
            <div className="py-6 my-4 rounded-xl border-2">
                <h1 className="text-4xl font-bold text-center my-10 text-indigo-600">Dashboard</h1>
                <div className="flex justify-center items-center gap-4 mb-10">
                    <button className="btn btn-primary" onClick={() => setActiveTab(true)}>Cart</button>
                    <button className="btn btn-primary" onClick={() => setActiveTab(false)}>Wishlist</button>
                </div>
            </div>
            <div className="my-10">
                {activeTab ? <Cart onPurchase={handlePurchase} /> : <WishList />}
            </div>

            {/* Modal for purchase confirmation */}
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Thank you for your purchase!</h3>
                        <p className="py-4">Your total cost is ${totalPrice}</p>
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
