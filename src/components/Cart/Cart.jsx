import { useState } from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import modalImg from '../../assets/Group.png'
import errorImg from '../../assets/error.svg'
const Cart = () => {
    const [showModal, setShowModal] = useState(false);
    const { cart, addToCart, removeFromCart, removeCategoryFromCart, setCart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    const navigate = useNavigate()

    const sortCartByPrice = () => {
        // Deep clone the cart array to force state update
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
        toast.success("Cart sorted by price");
    };

    const handleIncreseQuantity = (product) => {
        addToCart(product);
        toast.success('Item added to cart');
    }

    const handleDecreaseQuantity = (productId) => {
        removeFromCart(productId);
        toast.error("Item removed from cart");
    }

    const handleRemoveCategory = (category) => {
        removeCategoryFromCart(category);
        toast.error("Item category removed from cart");
    }
    const handlePurchase = () => {
        if (cart.length < 1) {
            toast.error("No products selected");
        } else {
            setShowModal(true);
            toast.success('Purchase Successful');
        }
    };
    const closeModal = () => {
        setCart([]);  // Empty the cart
        setShowModal(false);
        navigate('/');  // Redirect to homepage
        toast.success('Thank you for shopping with us!');

    };

    return (
        <div className=''>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <p className="text-xl font-bold">Total Price: {totalPrice} $</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={sortCartByPrice} className="px-4 py-2 bg-green-100 text-green-700 font-bold border border-green-800 rounded-xl">Sort by Price</button>
                    <button onClick={() => handlePurchase()} className="px-4 py-2 bg-blue-100 text-blue-700 font-bold border border-blue-800 rounded-xl">
                        Purchase
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4 border p-4 rounded-lg">
                {
                    cart.length > 0 ? (cart.map((product, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-full">
                            <div className="w-full md:w-24 h-24 flex-shrink-0">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-xl font-semibold text-gray-800 truncate">{product.title}</h1>
                                <p className="text-lg font-bold text-gray-700 mt-2">${product.price.toFixed(2)}</p>
                                <p className="text-sm text-gray-600 mt-1">Quantity: {product.quantity}</p>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                                <button onClick={() => handleIncreseQuantity(product)} className="p-2 bg-green-100 rounded-full text-green-500 hover:bg-green-200 transition duration-150">➕</button>
                                <button onClick={() => handleDecreaseQuantity(product.id)} className="p-2 bg-red-100 rounded-full text-red-500 hover:bg-red-200 transition duration-150">➖</button>
                                <button onClick={() => handleRemoveCategory(product.category)} className="p-2 bg-red-100 rounded-full text-red-500 hover:bg-red-200 transition duration-150">❌</button>
                            </div>
                        </div>
                    ))) : <div className="flex flex-col justify-center items-center h-auto w-full sm:col-span-9 border rounded-lg p-16">
                        <h1 className="text-2xl font-bold text-center mb-4">Cart is empty</h1>
                        <img src={errorImg} alt="" className="max-w-xs" />
                    </div>
                }
            </div>
            {/* Modal for purchase confirmation */}
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <div className="flex justify-center items-center mb-4">
                            <img src={modalImg} alt="" />
                        </div>
                        <h3 className="font-bold text-lg text-center">Thank you for your purchase!</h3>
                        <p className="py-4 text-center">Your total cost is ${totalPrice}</p>
                        <div className="modal-action">
                            <button className="btn w-full" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart
