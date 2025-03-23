import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductDescriptionPage from './pages/ProductDescriptionPage';
import SellPage from './pages/SellPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([
    // Pre-existing products (20 items)
    {
      id: 1,
      name: 'Vintage Denim Jacket',
      price: 25.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A classic vintage denim jacket, perfect for any casual outfit.',
      details: 'Made from 100% cotton, this jacket features a slim fit and distressed finish.',
    },
    {
      id: 2,
      name: 'Retro Sunglasses',
      price: 15.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'Stylish retro sunglasses with UV protection.',
      details: 'These sunglasses feature a lightweight frame and polarized lenses.',
    },
    {
      id: 3,
      name: 'Classic Leather Bag',
      price: 35.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A timeless leather bag for everyday use.',
      details: 'Crafted from genuine leather, this bag has multiple compartments and a sturdy handle.',
    },
    {
      id: 4,
      name: 'Bohemian Dress',
      price: 45.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A flowy bohemian dress perfect for summer.',
      details: 'Made from lightweight fabric, this dress features a floral print and adjustable straps.',
    },
    {
      id: 5,
      name: 'Vintage Watch',
      price: 50.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A vintage-inspired watch with a leather strap.',
      details: 'This watch features a quartz movement and a water-resistant design.',
    },
    {
      id: 6,
      name: 'Canvas Sneakers',
      price: 30.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'Comfortable canvas sneakers for casual wear.',
      details: 'These sneakers have a rubber sole and come in various colors.',
    },
    {
      id: 7,
      name: 'Woolen Scarf',
      price: 20.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A warm and cozy woolen scarf for winter.',
      details: 'Made from 100% wool, this scarf is soft and durable.',
    },
    {
      id: 8,
      name: 'Leather Wallet',
      price: 18.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A sleek leather wallet with multiple card slots.',
      details: 'Crafted from genuine leather, this wallet is both stylish and functional.',
    },
    {
      id: 9,
      name: 'Silk Blouse',
      price: 40.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'An elegant silk blouse for formal occasions.',
      details: 'Made from pure silk, this blouse features a button-down design.',
    },
    {
      id: 10,
      name: 'Denim Jeans',
      price: 28.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'Classic denim jeans with a straight fit.',
      details: 'These jeans are made from high-quality denim and feature a five-pocket design.',
    },
    {
      id: 11,
      name: 'Knit Sweater',
      price: 32.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A cozy knit sweater for chilly days.',
      details: 'Made from soft yarn, this sweater features a crew neck and ribbed cuffs.',
    },
    {
      id: 12,
      name: 'Leather Boots',
      price: 60.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'Stylish leather boots for any season.',
      details: 'These boots are made from genuine leather and have a durable rubber sole.',
    },
    {
      id: 13,
      name: 'Cotton T-Shirt',
      price: 12.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A comfortable cotton T-shirt for everyday wear.',
      details: 'Made from 100% cotton, this T-shirt is soft and breathable.',
    },
    {
      id: 14,
      name: 'Pleated Skirt',
      price: 22.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A chic pleated skirt for a polished look.',
      details: 'This skirt features a high waist and a flattering A-line silhouette.',
    },
    {
      id: 15,
      name: 'Wool Coat',
      price: 70.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A warm wool coat for winter.',
      details: 'Made from premium wool, this coat features a double-breasted design.',
    },
    {
      id: 16,
      name: 'Canvas Backpack',
      price: 38.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A durable canvas backpack for daily use.',
      details: 'This backpack has multiple compartments and adjustable straps.',
    },
    {
      id: 17,
      name: 'Silk Scarf',
      price: 25.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'An elegant silk scarf for accessorizing.',
      details: 'Made from pure silk, this scarf features a vibrant print.',
    },
    {
      id: 18,
      name: 'Leather Jacket',
      price: 85.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A stylish leather jacket for a bold look.',
      details: 'Crafted from genuine leather, this jacket features a zippered front.',
    },
    {
      id: 19,
      name: 'Woolen Socks',
      price: 8.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'Warm woolen socks for cold weather.',
      details: 'Made from 100% wool, these socks are soft and cozy.',
    },
    {
      id: 20,
      name: 'Cotton Dress',
      price: 34.0,
      image: 'https://via.placeholder.com/400x300',
      description: 'A comfortable cotton dress for summer.',
      details: 'Made from lightweight cotton, this dress features a relaxed fit.',
    },
  ]);

  // Function to add a new product
  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, id: Date.now() }; // Add a unique ID
    setProducts([...products, productWithId]);
  };

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <GoogleOAuthProvider clientId="433863021229-r0eul79uireqfi4k7r2kj58nq9hih12d.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* Login Page */}
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />

          {/* Home Page (Protected) */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage onLogout={handleLogout} products={products} />
              </ProtectedRoute>
            }
          />

          {/* Product Description Page (Protected) */}
          <Route
            path="/product/:productId"
            element={
              <ProtectedRoute>
                <ProductDescriptionPage products={products} />
              </ProtectedRoute>
            }
          />

          {/* Sell Page (Protected) */}
          <Route
            path="/sell"
            element={
              <ProtectedRoute>
                <SellPage addProduct={addProduct} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;