import React, { useState } from "react";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Orders data
  const [orders, setOrders] = useState([
    { id: 1, customer: "Sumith Perera", item: "Laptop", status: "Pending" },
    { id: 2, customer: "Anne Peiris", item: "Phone", status: "Completed" },
  ]);

  // Users data
  const [registeredUsers] = useState([
    { name: "Rayan", email: "rayan@example.com" },
    { name: "Kusum", email: "kusum@example.com" },
  ]);

  // Products data
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 600 },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  // Orders logic
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const updateOrder = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "Pending" ? "Completed" : "Pending" }
          : order
      )
    );
  };

  // Products logic
  const addProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      { id: Date.now(), name: newProduct.name, price: Number(newProduct.price) },
    ]);
    setNewProduct({ name: "", price: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, name: product.name + " (Updated)" }
          : product
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3] text-gray-900">
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 transform
          bg-[#fffaf0] text-gray-800 shadow-lg
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:shadow-none
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          {/* Close button on mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-600 text-2xl font-bold focus:outline-none"
            aria-label="Close sidebar"
          >
            &times;
          </button>
        </div>
        <nav className="p-4 space-y-3 text-lg">
          <a
            href="#orders"
            className="block rounded px-3 py-2 hover:bg-[#fcefd2]"
            onClick={() => setSidebarOpen(false)}
          >
            Orders
          </a>
          <a
            href="#users"
            className="block rounded px-3 py-2 hover:bg-[#fcefd2]"
            onClick={() => setSidebarOpen(false)}
          >
            Users
          </a>
          <a
            href="#products"
            className="block rounded px-3 py-2 hover:bg-[#fcefd2]"
            onClick={() => setSidebarOpen(false)}
          >
            Products
          </a>
        </nav>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between bg-[#fffaf0] px-4 py-3 shadow-md sticky top-0 z-30">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar menu"
          >
            &#9776;
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Orders Section */}
          <section id="orders" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <div className="overflow-x-auto bg-white shadow rounded-lg">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-[#fcefd2]">
                  <tr>
                    <th className="p-3 whitespace-nowrap">Customer</th>
                    <th className="p-3 whitespace-nowrap">Item</th>
                    <th className="p-3 whitespace-nowrap">Status</th>
                    <th className="p-3 text-center whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-300">
                      <td className="p-3 whitespace-nowrap">{order.customer}</td>
                      <td className="p-3 whitespace-nowrap">{order.item}</td>
                      <td className="p-3 whitespace-nowrap">{order.status}</td>
                      <td className="p-3 flex flex-wrap justify-center gap-2">
                        <button
                          onClick={() => updateOrder(order.id)}
                          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 min-w-[80px] cursor-pointer"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 min-w-[80px] cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Registered Users Section */}
          <section id="users" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              {registeredUsers.length === 0 ? (
                <p>No users registered yet.</p>
              ) : (
                <ul className="space-y-2">
                  {registeredUsers.map((user, index) => (
                    <li key={index} className="bg-[#fdf6e3] p-3 rounded break-words">
                      <span className="font-semibold">{user.name}</span> —{" "}
                      <span className="text-gray-700">{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* Products Management Section */}
          <section id="products">
            <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
            <form
              onSubmit={addProduct}
              className="bg-white shadow rounded-lg p-6 max-w-md mb-6"
            >
              <div className="mb-4">
                <label className="block font-semibold mb-1" htmlFor="productName">
                  Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1" htmlFor="productPrice">
                  Price ($)
                </label>
                <input
                  id="productPrice"
                  type="number"
                  min="0"
                  step="any"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
              >
                Add Product
              </button>
            </form>

            <div className="overflow-x-auto bg-white shadow rounded-lg">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-[#fcefd2]">
                  <tr>
                    <th className="p-3 whitespace-nowrap">Product</th>
                    <th className="p-3 whitespace-nowrap">Price ($)</th>
                    <th className="p-3 text-center whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t border-gray-300">
                      <td className="p-3 whitespace-nowrap">{product.name}</td>
                      <td className="p-3 whitespace-nowrap">{product.price}</td>
                      <td className="p-3 flex flex-wrap justify-center gap-2">
                        <button
                          onClick={() => updateProduct(product.id)}
                          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 min-w-[80px] cursor-pointer"
                        >
                          Update
                        </button>

                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 min-w-[80px] cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
