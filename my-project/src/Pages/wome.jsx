import React from 'react';
import { useNavigate } from 'react-router-dom';


const Women = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Get existing cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the new product
    cart.push(product);
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Go to cart page
    navigate('/cart');
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Banner */}
      <section
        className="relative text-white text-center py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/women-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#264653]/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Women's Collection</h1>
          <p className="mb-6 text-lg">Stylish. Affordable. Comfortable.</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-10 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold text-[#264653] mb-10">
          Shop Women's Fashion
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {womenProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 text-left"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-[#264653] mb-2">{product.name}</h3>
              <p className="text-[#e76f51] font-medium mb-4">{product.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-[#264653] text-white px-4 py-2 rounded-lg hover:bg-[#1f3b3d] transition w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Women;
