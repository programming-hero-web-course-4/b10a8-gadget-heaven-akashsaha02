import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch('productsData.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((item) => item.category === selectedCategory);

  // Get unique categories
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  return (
    <div>
      <Banner />

      <div className="my-10">
        <h2 className="text-3xl text-center font-bold">Explore Cutting-Edge Gadgets</h2>
        <div className="grid grid-cols-12 mt-10 gap-4">
          {/* Categories */}
          <div className="col-span-3 bg-base-200 p-4">
            <div className="flex md:flex-col gap-2">
              {categories.map((category, index) => (
                <p
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-center cursor-pointer ${
                    selectedCategory === category ? "bg-purple-700 text-white" : "bg-purple-600 text-white"
                  }`}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="col-span-9 grid grid-cols-2 gap-4">
            {filteredProducts.map((item, index) => (
              <div key={index} className="p-2 border rounded-lg">
                <div className="card">
                  <div className="card-body">
                    <img src={item.image} alt={item.title} className="w-full rounded-lg" />
                    <h2 className="card-title">{item.title}</h2>
                    <p className="text-lg font-bold">${item.price}</p>
                    <button className="btn btn-sm">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
