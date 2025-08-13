import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateQuantity = (id, qty) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    navigate("/checkout"); // You can create a checkout page later
  };

  return (
    <div className="font-sans bg-white min-h-screen text-gray-800">
      <header className="bg-white px-6 md:px-16 py-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold text-[#e76f51]">🌟 RetailVibe</div>
        <nav className="flex gap-4 items-center text-sm font-medium">
          <Link to="/" className="hover:text-[#e76f51]">Home</Link>
          <Link to="/shop" className="hover:text-[#e76f51]">Shop</Link>
          <Link to="/deals" className="hover:text-[#e76f51]">Deals</Link>
          <Link to="/contact" className="hover:text-[#e76f51]">Contact</Link>
        </nav>
      </header>

      <div className="px-6 md:px-16 py-10">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/shop" className="text-[#e76f51]">Go shopping</Link>.</p>
        ) : (
          <>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Total</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      {item.name}
                    </td>
                    <td className="p-3">Rs.{item.price}</td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={item.quantity || 1}
                        min="1"
                        className="border p-1 w-16"
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td className="p-3">Rs.{(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td className="p-3">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold">Grand Total: Rs.{grandTotal.toFixed(2)}</h2>
              <button
                onClick={handleCheckout}
                className="bg-[#e76f51] text-white px-6 py-2 rounded hover:bg-[#d45d43]"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
