import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCategories from "../../components/ProductCategories/ProductCategories";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Corrected spelling from "catagories" to "categories"
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("productsData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    fetch("productCatagories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    document.title = "Zenin Tech | Home";
  }, [selectedCategory, location]);

  console.log(categories.map((item) => item.name));

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) =>
        categories.some((category) => category.name.toLowerCase() === selectedCategory.toLocaleLowerCase() && item.category.toLocaleLowerCase() === selectedCategory.toLowerCase())
      );

  // Get unique categories
  const categoriesList = ["All", ...new Set(categories.map((item) => item.name))]; // Corrected "catagories" and fixed new Set syntax

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {/* Banner Component */}
      <Banner />

      <div className="my-10">
        <h2 className="text-3xl text-center font-bold">Explore Cutting-Edge Gadgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10 gap-4">
          {/* Categories Sidebar */}
          <div className="md:col-span-3 mb-4 md:mb-0">
            <ProductCategories
              categoriesList={categoriesList}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Products Section */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              ))
            ) : (
              <div className="">Not found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
