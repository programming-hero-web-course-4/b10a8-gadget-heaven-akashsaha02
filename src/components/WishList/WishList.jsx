import { useCart } from '../../context/CartContext/CartContext';
import { useWishlist } from '../../context/WishlistContext/WishlistContext';
import toast from 'react-hot-toast';
import errorImg from '../../assets/error.svg'
const WishList = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const {addToCart}=useCart();
    const handleMoveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
        toast.success('Item moved to cart');
    }

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
        toast.error("Item removed from wishlist");
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Your Wishlist 💜({wishlist.length})</h2>
            <div className="flex flex-col items-center gap-4 mt-4 border p-4 rounded-lg">
                {
                    wishlist.length>0?(
                        wishlist.map((product, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-full">
                                <div className="w-full md:w-24 h-24 flex-shrink-0">
                                    <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h1 className="text-xl font-semibold text-gray-800 truncate">{product.title}</h1>
                                    <p className="text-lg font-bold text-gray-700 mt-2">${product.price.toFixed(2)}</p>
                                </div>
                                <div className="flex space-x-2 mt-4 md:mt-0">
                                    <button onClick={() => handleMoveToCart(product)} className="py-2 px-4 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition duration-150">Move to Cart 🛒</button>
                                    <button onClick={() => handleRemoveFromWishlist(product.id)} className="p-2 bg-red-100 rounded-full text-red-500 hover:bg-red-200 transition duration-150">❌</button>
                                </div>
                            </div>
                        ))
                    ):<div className="flex flex-col justify-center items-center h-auto w-full sm:col-span-9 border rounded-lg p-16">
                    <h1 className="text-2xl font-bold text-center mb-4">Wishlist is empty</h1>
                    <img src={errorImg} alt="" className="max-w-xs" />
                </div>
                }
            </div>
        </div>
    )
}

export default WishList
