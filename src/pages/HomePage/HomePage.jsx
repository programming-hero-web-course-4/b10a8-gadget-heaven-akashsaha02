// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("productsData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  // Get unique categories
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Banner />

      <div className="my-10">
        <h2 className="text-3xl text-center font-bold">Explore Cutting-Edge Gadgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10 gap-4">
          {/* Categories Sidebar */}
          <div className="md:col-span-3 mb-4 md:mb-0">
            <ProductCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Products Section */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
