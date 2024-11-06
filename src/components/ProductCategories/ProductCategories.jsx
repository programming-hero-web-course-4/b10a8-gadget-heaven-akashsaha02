const ProductCategories = ({ categoriesList, selectedCategory, onCategorySelect }) => {
    console.log(categoriesList);
    return (
        <div className="flex overflow-scroll no-scrollbar md:flex-col gap-4 border-2 bg-gray-50 py-4 md:py-8 px-4 rounded-xl">
            {categoriesList.map((category, index) => (
                <p
                    key={index}
                    onClick={() => onCategorySelect(category)}
                    className={`px-4 py-1 md:px-2 md:py-3 font-bold text-sm sm:text-md rounded-full text-center cursor-pointer ${selectedCategory !== category
                            ? "bg-white text-blue-900 border-blue-500 border-2 "
                            : "bg-blue-500 text-white border-blue-500 border-2 shadow-md"
                        }`}
                >
                    {category}
                </p>
            ))}
        </div>
    );
};

export default ProductCategories;