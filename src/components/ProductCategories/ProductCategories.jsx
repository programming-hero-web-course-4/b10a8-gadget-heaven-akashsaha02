const ProductCategories = ({ categoriesList, selectedCategory, onCategorySelect }) => {
    console.log(categoriesList);
    return (
        <div className="flex overflow-scroll no-scrollbar md:flex-col gap-4 border-2 bg-gray-50 py-8 px-4 rounded-xl">
            {categoriesList.map((category, index) => (
                <p
                    key={index}
                    onClick={() => onCategorySelect(category)}
                    className={`px-4 py-3 font-bold rounded-full text-center cursor-pointer ${selectedCategory === category
                            ? "bg-indigo-100 text-indigo-900 border-indigo-500 border-2 shadow-md"
                            : "bg-indigo-500 text-white border-indigo-500 border-2"
                        }`}
                >
                    {category}
                </p>
            ))}
        </div>
    );
};

export default ProductCategories;