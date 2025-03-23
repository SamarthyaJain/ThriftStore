import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaTimes } from 'react-icons/fa';

const SellPage = ({ addProduct }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    details: '',
    image: '',
  });
  const [imagePreview, setImagePreview] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: Date.now(), // Generate a unique ID
      price: parseFloat(product.price), // Convert price to a number
    };
    addProduct(newProduct); // Add the new product to the list
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#F8ECD1] to-[#DEB6AB] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-[#85586F] mb-6">Sell Your Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#85586F] font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#DEB6AB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85586F]"
              required
            />
          </div>

          {/* Product Price */}
          <div className="mb-6">
            <label htmlFor="price" className="block text-[#85586F] font-semibold mb-2">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#DEB6AB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85586F]"
              required
            />
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-[#85586F] font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#DEB6AB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85586F]"
              rows="4"
              required
            />
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <label htmlFor="details" className="block text-[#85586F] font-semibold mb-2">
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={product.details}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#DEB6AB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85586F]"
              rows="4"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label htmlFor="image" className="block text-[#85586F] font-semibold mb-2">
              Upload Image
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
                required
              />
              <label
                htmlFor="image"
                className="bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white px-6 py-2 rounded-lg cursor-pointer hover:from-[#AC7D88] hover:to-[#85586F] transition duration-300"
              >
                <FaUpload className="inline-block mr-2" />
                Choose Image
              </label>
              {imagePreview && (
                <div className="ml-4 relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setProduct({ ...product, image: '' });
                      setImagePreview('');
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition duration-300"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white px-6 py-2 rounded-lg hover:from-[#AC7D88] hover:to-[#85586F] transition duration-300"
          >
            List Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellPage;