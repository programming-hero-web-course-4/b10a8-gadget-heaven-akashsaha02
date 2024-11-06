import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import WishList from '../../components/WishList/WishList';

const DashboardPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab === 'wishlist' ? false : true);

  useEffect(() => {
    document.title = 'Blu Gadgets | Dashboard';
  }, [location]);

  return (
    <div>
      <div className="py-16 my-4 rounded-xl border-2 bg-blue-600 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Dashboard</h1>
        <p className="mt-2 text-sm md:text-md text-white mb-8">Manage the products through dashboard</p>
        <div className="flex justify-center items-center gap-4 max-w-sm mx-auto px-4">
          <button
            className={`py-2 rounded-lg font-bold w-full border ${!activeTab ? 'bg-blue-700 text-white' : 'bg-white text-blue-600'}`}
            onClick={() => setActiveTab(true)}
          >
            Cart
          </button>
          <button
            className={`py-2 rounded-lg font-bold w-full border ${activeTab ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            onClick={() => setActiveTab(false)}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="my-10">
        {activeTab ? <Cart /> : <WishList />}
      </div>
    </div>
  );
};

export default DashboardPage;