const ProductCard = ({ product, onViewDetails }) => {
    return (
        <div className="p-2 border rounded-lg">
            <div className="card">
                <div className="card-body">
                    <img src={product.image} alt={product.title} className="w-full rounded-lg" />
                    <h2 className="text-lg line-clamp-1">{product.title}</h2>
                    <p className="text-lg font-bold">${product.price}</p>
                    <button
                        onClick={() => onViewDetails(product.id)}
                        className="btn btn-sm"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
