import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductDescriptionPage = ({ products }) => {
  const { productId } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(productId)); // Find the product

  if (!product) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-r from-[#F8ECD1] to-[#DEB6AB] p-6">
        <div className="text-center text-2xl mt-8 text-[#85586F]">
          Product not found!
        </div>
        <Link
          to="/"
          className="block text-center text-[#85586F] hover:text-[#AC7D88] transition duration-300 mt-4"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#F8ECD1] to-[#DEB6AB] p-6">
      {/* Back Button */}
      <Link
        to="/"
        className="text-[#85586F] hover:text-[#AC7D88] transition duration-300"
      >
        &larr; Back to Home
      </Link>

      {/* Product Details */}
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#85586F] mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-[#AC7D88] mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-600 mb-4">{product.details}</p>

          {/* Add to Cart and Like Buttons */}
          <div className="flex items-center space-x-4">
            <button
              className="bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white px-6 py-2 rounded-full hover:from-[#AC7D88] hover:to-[#85586F] transition duration-300"
            >
              <FaShoppingCart className="inline-block mr-2" />
              Add to Cart
            </button>
            <button
              className="text-2xl text-[#85586F] hover:text-red-500 transition duration-300"
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;