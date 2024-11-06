import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import { useCart } from "../../context/CartContext/CartContext";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id, products]);

  useEffect(() => {
    if (product) {
      document.title = `Product Details - ${product.title}`;
    }
  }, [product, location]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Product added to cart");
  }

  const handleAddToWishlist = (product) => {
    !isInWishlist(product.id) && addToWishlist(product)
    toast.success("Product added to wishlist");
  }

  return (
    <div className="mx-auto px-5 py-5 lg:px-0">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        {/* Product Details */}
        <div className="md:w-1/2 p-5">
          {/* Header Section */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-500 mb-4">{product.category}</p>
            {/* Rating and Availability */}
            <div className="flex items-center mb-2">
              <div className="flex items-center text-yellow-500">
                {[...Array(Math.round(product.rating))].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.rating})</span>
              <span
                className={`ml-4 px-2 py-1 text-sm rounded ${product.availability ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
              >
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price.toFixed(2)}</p>

            {/* Description */}
            <h3 className="text-lg font-semibold mb-2">Product Description</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Specifications */}
            <h3 className="text-lg font-semibold mb-2">Product Specification</h3>
            <ul className="list-disc list-inside mb-6">
              {product.specification.map((spec, index) => (
                <li key={index} className="text-gray-600">{spec}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 justify-center"
              onClick={()=>handleAddToCart(product)}
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button
              className={`flex items-center px-4 py-2 justify-center ${isInWishlist(product.id)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
                } text-white rounded-lg`}
              onClick={() => handleAddToWishlist(product)}
              disabled={isInWishlist(product.id)}
            >
              <FaHeart className="mr-2" />
              {isInWishlist(product.id) ? "Added to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;