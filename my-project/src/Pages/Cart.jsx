import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart items from localStorage when page loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Change quantity
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    if (newQuantity < 1) return;
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      const quantity = item.quantity || 1;
      return total + (priceNumber * quantity);
    }, 0).toFixed(2);
  };

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#264653]">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 mb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-[#e76f51]">{item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                >-</button>
                <span className="px-4">{item.quantity || 1}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                >+</button>
              </div>
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Summary */}
          <div className="text-right mt-6">
            <p className="text-xl font-semibold">
              Total: <span className="text-[#e76f51]">${calculateTotal()}</span>
            </p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => navigate('/women')}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate('/checkout')}
                className="bg-[#264653] text-white px-4 py-2 rounded hover:bg-[#1f3b3d]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
