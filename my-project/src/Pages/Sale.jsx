import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saleProducts } from "../data/product";

const Sale = () => {
  const [sort, setSort] = useState("popular");
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/Cart");
  };

  const handleViewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Banner */}
      <section
        className="relative text-white text-center py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/sale-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Special Sale</h1>
          <p className="text-lg">Up to 50% OFF – Limited Time!</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {saleProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 relative"
          >
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
            </span>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>

            <div className="mt-2">
              <span className="text-gray-400 line-through mr-2">
                Rs. {product.oldPrice}
              </span>
              <span className="text-red-500 font-bold">
                Rs. {product.price}
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="flex-1 border border-[#e76f51] text-[#e76f51] px-4 py-2 rounded hover:bg-[#e76f51] hover:text-white"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleViewProduct(product.id)}
                className="flex-1 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="px-6 md:px-16 pb-10 flex justify-center gap-2">
        <button className="px-4 py-2 border rounded hover:bg-gray-100">1</button>
        <button className="px-4 py-2 border rounded hover:bg-gray-100">2</button>
        <button className="px-4 py-2 border rounded hover:bg-gray-100">Next</button>
      </div>

      {/* Footer */}
      <footer className="bg-[#264653] text-gray-300 text-center py-8 text-sm">
        &copy; 2025 RetailVibe. Crafted for the colorful you.
      </footer>
    </div>
  );
};

export default Sale;
