const ProductCategories = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="flex md:flex-col gap-2 bg-base-200 p-4 rounded-xl">
            {categories.map((category, index) => (
                <p
                    key={index}
                    onClick={() => onCategorySelect(category)}
                    className={`px-4 py-2 rounded-full text-center cursor-pointer ${selectedCategory === category
                            ? "bg-purple-700 text-white"
                            : "bg-purple-600 text-white"
                        }`}
                >
                    {category}
                </p>
            ))}
        </div>
    );
};

export default ProductCategories;