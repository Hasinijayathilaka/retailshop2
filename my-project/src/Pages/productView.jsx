import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { allProducts } from "../data/product";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M"); // default size
  const [selectedColor, setSelectedColor] = useState("Black"); // default color

  if (!product)
    return (
      <p className="p-6 text-center text-red-500 font-semibold text-lg">
        Product not found!
      </p>
    );

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity,
        selectedSize,
        selectedColor
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="px-6 md:px-16 py-10 flex flex-col md:flex-row gap-10 bg-gray-50 min-h-screen">
      {/* Product Image */}
      <div className="md:w-1/2 flex justify-center items-center bg-white rounded-lg shadow-lg p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain rounded"
        />
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 flex flex-col justify-between bg-white rounded-lg shadow-lg p-6">
        <div>
          <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#e76f51] font-bold text-2xl">Rs.{product.price}</span>
            <span className="line-through text-gray-400 text-lg">Rs.{product.oldPrice}</span>
          </div>

          <div className="flex items-center mb-4">
            <p className="text-yellow-500 text-xl mr-2">
              {"★".repeat(Math.round(product.rating))}
            </p>
            <span className="text-gray-500">{product.rating} / 5</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description ||
              `Detailed description for ${product.name} goes here. Highlight features, materials, and care instructions to make the product appealing.`}
          </p>

          {/* Product Options */}
          <div className="flex gap-4 mb-4 flex-wrap">
            <div>
              <label className="block mb-1 font-medium">Size:</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#e76f51]"
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Color:</label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#e76f51]"
              >
                <option>Black</option>
                <option>Blue</option>
                <option>Red</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border border-gray-300 px-4 py-2 rounded w-24 text-center focus:outline-none focus:ring-2 focus:ring-[#e76f51]"
          />
          <button
            onClick={handleAddToCart}
            className="bg-[#e76f51] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#d45d43] hover:shadow-lg transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="mt-6 inline-block bg-[#e76f51] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#d45d43] hover:shadow-lg transition-all duration-300 text-center"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProductView;
