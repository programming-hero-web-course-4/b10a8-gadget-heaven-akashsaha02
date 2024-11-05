import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Bar, Scatter, ResponsiveContainer } from 'recharts';
import { ProductContext } from "../../context/ProductContext/ProductContext";

const StatisticsPage = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "Blu Gadgets | Stats";
    document.title = pageTitle;
  }, [location]);

  const products = useContext(ProductContext);
  return (
    <div className="">
      <div className="py-16 my-4 rounded-xl text-white text-center border-2 bg-blue-600">
        <h1 className="text-2xl  md:text-3xl lg:text-4xl font-bold">Statistics</h1>
        <p className="mt-2 text-sm md:text-md">View the statistics of the product</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={products}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="title" />

          <YAxis />
          <Tooltip />
          <Legend />

          {/* Area representing Prices */}
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />

          {/* Bar representing Prices */}
          <Bar dataKey="price" barSize={20} fill="#413ea0" />

          {/* Scatter representing Ratings */}
          <Scatter dataKey="rating" fill="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsPage;