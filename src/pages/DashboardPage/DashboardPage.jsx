import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import { useWishlist } from '../../context/WishlistContext/WishlistContext';

const DashboardPage = () => {
    const { cart, removeFromCart } = useCart();
    const { wishlist, removeFromWishlist, addToCart } = useWishlist();
    const [activeTab, setActiveTab] = useState(true);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">Dashboard</h1>
            <div className="flex justify-center items-center gap-4 mb-10">
                <button
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => setActiveTab(true)}
                >
                    <FaShoppingCart className="mr-2" />
                    Cart
                </button>
                <button
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => setActiveTab(false)}
                >
                    <FaHeart className="mr-2" />
                    Wishlist
                </button>
            </div>

            {activeTab ? (
                <div className="flex flex-col items-center gap-4">
                    {cart.length === 0 ? (
                        <h1 className="text-2xl">Cart is empty</h1>
                    ) : (
                        cart.map((product, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
                                <div>
                                    <h1 className="text-lg font-bold">{product.title}</h1>
                                    <p className="text-gray-500">{product.category}</p>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeFromCart(product.id)} className="text-red-500">❌</button>
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <div className="flex flex-col items-center gap-4">
                    {wishlist.length === 0 ? (
                        <h1 className="text-2xl">Wishlist is empty</h1>
                    ) : (
                        wishlist.map((product, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
                                <div>
                                    <h1 className="text-lg font-bold">{product.title}</h1>
                                    <p className="text-gray-500">{product.category}</p>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                                <div className="space-x-2">
                                    <button onClick={() => removeFromWishlist(product.id)} className="text-red-500">❌</button>
                                    <button
                                        onClick={() => {
                                            addToCart(product);
                                            removeFromWishlist(product.id);
                                        }}
                                        className="btn btn-sm">Add to cart</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default DashboardPage;