import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { accessoriesProducts } from "../data/product";

const AccessoriesCategory = () => {
  const [sort, setSort] = useState("popular");
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 }); // ✅ fixed: spread individual product
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart"); // Navigate to cart page after adding
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white px-6 md:px-16 py-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold text-[#e76f51]">🌟 RetailVibe</div>
        <nav className="flex gap-4 items-center text-sm font-medium">
          <Link to="/" className="hover:text-[#e76f51]">Home</Link>
          <Link to="/shop" className="hover:text-[#e76f51]">Shop</Link>
          <Link to="/deals" className="hover:text-[#e76f51]">Deals</Link>
          <Link to="/contact" className="hover:text-[#e76f51]">Contact</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 md:px-16 py-4 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#e76f51]">Home</Link> &gt; Accessories
      </div>

      {/* Banner */}
      <section
        className="relative text-white text-center py-20 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/accessories-banner.png')" }}
      >
        <div className="absolute inset-0 bg-[#264653]/60" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Accessories</h1>
          <p className="text-lg">Complete your look with style</p>
        </div>
      </section>

      {/* Product Grid */}
      <div className="px-6 md:px-16 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {accessoriesProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#e76f51] font-bold">Rs.{product.price}</span>
                <span className="line-through text-gray-400">Rs.{product.oldPrice}</span>
              </div>
              <p className="text-yellow-500">
                {"★".repeat(Math.round(product.rating))}
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-[#e76f51] text-white px-4 py-2 rounded hover:bg-[#d45d43]"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="border border-[#e76f51] text-[#e76f51] px-4 py-2 rounded hover:bg-[#e76f51] hover:text-white"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default AccessoriesCategory;
