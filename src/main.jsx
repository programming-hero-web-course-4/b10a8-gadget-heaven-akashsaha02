import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';

import { ProductProvider } from "./context/ProductContext/ProductContext.jsx";
import { CartProvider } from './context/CartContext/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext/WishlistContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/product/:id',
        element: <ProductDetails />
      },
      {
        path: '/statistics',
        element: <h1>Statistics</h1>
      },
      {
        path: '/dashboard',
        element: <h1>Dashboard</h1>
      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
);