import { FaTrashAlt } from 'react-icons/fa';
import { useCart } from '../../context/CartContext/CartContext';
import { useState } from 'react';

const Cart = ({ onPurchase }) => {
    const { cart, addToCart, removeFromCart, removeCategoryFromCart, setCart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    const sortCartByPrice = () => {
        // Deep clone the cart array to force state update
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Cart 🛒</h2>
                <div className="flex items-center gap-2">
                    <button onClick={sortCartByPrice} className="btn btn-sm">Sort by Price</button>
                    <button onClick={onPurchase} className="btn btn-primary">
                        Purchase - ${totalPrice}
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
                {cart.map((product, index) => (
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
                            <button onClick={() => addToCart(product)} className="p-2 bg-green-100 rounded-full text-green-500 hover:bg-green-200 transition duration-150">➕</button>
                            <button onClick={() => removeFromCart(product.id)} className="p-2 bg-red-100 rounded-full text-red-500 hover:bg-red-200 transition duration-150">➖</button>
                            <button onClick={() => removeCategoryFromCart(product.category)} className="p-2 bg-red-100 rounded-full text-red-500 hover:bg-red-200 transition duration-150">❌</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart
