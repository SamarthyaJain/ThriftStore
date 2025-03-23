import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaHeart, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const HomePage = ({ onLogout, products }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLikedProductsOpen, setIsLikedProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedProducts, setLikedProducts] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  // Function to toggle the cart drawer
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Function to handle checkout
  const checkout = () => {
    alert('Proceeding to checkout!');
    setCart([]);
    setIsCartOpen(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle liking/unliking a product
  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  // Function to toggle the liked products drawer
  const toggleLikedProductsDrawer = () => {
    setIsLikedProductsOpen(!isLikedProductsOpen);
  };

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#410445] to-[#A5158C]">
      {/* Navbar */}
      <nav className="bg-[#410445] shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#F6DC43]">Thrift Store</div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#F6DC43] focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-4">
            <Link to="/" className="text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">Home</Link>
            <Link to="/sell" className="text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">Sell</Link>
            <a href="#" className="text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">About</a>
            <a href="#" className="text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">Contact</a>
          </div>

          {/* Icons (Search, Heart, Cart, Logout) */}
          <div className="flex space-x-6 items-center">
            {/* Search Input */}
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="px-4 py-2 rounded-full bg-[#F6DC43] bg-opacity-20 text-[#410445] placeholder-[#410445] focus:outline-none focus:bg-opacity-30 transition duration-300"
              />
              <FaSearch className="absolute right-3 top-2.5 text-[#410445] text-xl cursor-pointer" />
            </div>

            {/* Heart Icon */}
            <div className="relative">
              <FaHeart
                className={`text-[#F6DC43] hover:text-[#FF2DF1] cursor-pointer transition duration-300 text-2xl ${
                  likedProducts.length > 0 ? 'text-[#FF2DF1]' : ''
                }`}
                onClick={toggleLikedProductsDrawer}
              />
              {likedProducts.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF2DF1] text-[#410445] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {likedProducts.length}
                </span>
              )}
            </div>

            {/* Cart Icon with Badge */}
            <div className="relative">
              <FaShoppingCart
                className="text-[#F6DC43] hover:text-[#FF2DF1] cursor-pointer transition duration-300 text-2xl"
                onClick={toggleCart}
              />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF2DF1] text-[#410445] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300"
            >
              <FaSignOutAlt className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#410445]">
            <div className="px-6 py-4 space-y-4">
              <Link to="/" className="block text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">Home</Link>
              <Link to="/sell" className="block text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">Sell</Link>
              <a href="#" className="block text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">About</a>
              <a href="#" className="block text-[#F6DC43] hover:text-[#FF2DF1] transition duration-300">Contact</a>
              {/* Mobile Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full px-4 py-2 rounded-full bg-[#F6DC43] bg-opacity-20 text-[#410445] placeholder-[#410445] focus:outline-none focus:bg-opacity-30 transition duration-300"
                />
                <FaSearch className="absolute right-3 top-2.5 text-[#410445] text-xl cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleCart}>
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={toggleCart}
              className="absolute top-4 right-4 text-[#410445] bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition duration-300"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-[#410445] mb-6">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#410445]">{item.name}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-[#FF2DF1] hover:text-[#A5158C] transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-6">
                  <p className="text-xl font-bold text-[#410445]">
                    Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                  </p>
                  <button
                    onClick={checkout}
                    className="bg-gradient-to-r from-[#410445] to-[#A5158C] text-white px-6 py-2 rounded-full mt-4 w-full hover:from-[#A5158C] hover:to-[#410445] transition duration-300"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Liked Products Drawer */}
      {isLikedProductsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleLikedProductsDrawer}>
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={toggleLikedProductsDrawer}
              className="absolute top-4 right-4 text-[#410445] bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition duration-300"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-[#410445] mb-6">Liked Products</h2>
            {likedProducts.length === 0 ? (
              <p className="text-gray-600">You have no liked products.</p>
            ) : (
              <div>
                {products
                  .filter((product) => likedProducts.includes(product.id))
                  .map((product) => (
                    <div key={product.id} className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-[#410445]">{product.name}</h3>
                          <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleLike(product.id)}
                        className="text-[#FF2DF1] hover:text-[#A5158C] transition duration-300"
                      >
                        Unlike
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-[#F6DC43] mb-4">
          Welcome to Thrift Store
        </h1>
        <p className="text-xl text-[#FF2DF1] mb-8">
          Find unique and affordable second-hand items!
        </p>
        <Link
          to="/sell"
          className="bg-gradient-to-r from-[#410445] to-[#A5158C] text-white px-8 py-3 rounded-full hover:from-[#A5158C] hover:to-[#410445] transition duration-300"
        >
          Sell Your Product
        </Link>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#F6DC43] mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#410445] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="bg-gradient-to-r from-[#410445] to-[#A5158C] text-white px-4 py-2 rounded-full hover:from-[#A5158C] hover:to-[#410445] transition duration-300"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(product.id);
                    }}
                    className={`text-2xl ${
                      likedProducts.includes(product.id) ? 'text-[#FF2DF1]' : 'text-gray-300'
                    } hover:text-[#FF2DF1] transition duration-300`}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-[#410445] to-[#A5158C] py-12 mt-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Next Treasure?
          </h2>
          <p className="text-[#F6DC43] mb-8">
            Explore our collection of unique and affordable items today!
          </p>
          <Link
            to="/"
            className="bg-white text-[#410445] px-8 py-3 rounded-full hover:bg-[#F6DC43] transition duration-300"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#410445] to-[#A5158C] py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">
            &copy; 2023 Thrift Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;