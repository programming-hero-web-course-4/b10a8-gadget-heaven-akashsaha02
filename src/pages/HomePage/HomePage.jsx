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
        <div className="grid grid-cols-12 mt-10 gap-4">
          {/* Categories */}
          <div className="col-span-3">
            <ProductCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Products */}
          <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 gap-4">
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
