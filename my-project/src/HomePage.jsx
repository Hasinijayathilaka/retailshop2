import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="font-sans bg-white text-gray-800">
    {/* Header */}
    <header className="bg-white px-6 md:px-16 py-4 shadow-md flex justify-between items-center">
     <Link to="/admin" className="text-2xl font-bold text-[#e76f51] flex items-center gap-1">
  🌟 RetailVibe
</Link>
      <nav className="flex flex-wrap gap-4 items-center text-sm font-medium">
        <Link to="/" className="hover:text-[#e76f51] transition">Home</Link>
        <Link to="/about" className="hover:text-[#e76f51] transition">About</Link> 
        <Link to="/shop" className="hover:text-[#e76f51] transition">Shop</Link>
        <Link to="/deals" className="hover:text-[#e76f51] transition">Deals</Link>
        <Link to="/contact" className="hover:text-[#e76f51] transition">Contact</Link>
        <Link to="/login" className="px-3 py-1 border border-[#e76f51] text-[#e76f51] rounded hover:bg-[#e76f51] hover:text-white transition">
          Login
        </Link>
        <Link to="/signup" className="px-3 py-1 border border-[#e76f51] text-[#e76f51] rounded hover:bg-[#e76f51] hover:text-white transition">
          Sign Up
        </Link>
      </nav>
    </header>

    {/* Hero */}
    <section
      className="relative text-white text-center py-32 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/8.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#264653]/60 z-0" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Style. Shop Smart.</h1>
        <p className="mb-6 text-lg">Exclusive collections, trendy looks & unbeatable deals!</p>
        <button className="bg-[#e76f51] hover:bg-[#d45d43] text-white py-3 px-8 rounded-full shadow-lg transition text-lg">
          Start Shopping
        </button>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-semibold text-[#264653] mb-10">Shop by Category</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Women', img: '/4.jpg', link: '/category/women' },
          { label: 'Men', img: '/5.jpg', link: '/category/Men' },
          { label: 'Accessories', img: '/6.jpg' , link: '/category/Accessories'},
          { label: 'Sale', img: '/7.jpg', link: '/category/Sale' },
        ].map(({ label, img, link }) => (
          link ? (
            <Link to={link} key={label} className="no-underline text-inherit">
              <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-md transition">
                <img src={img} alt={label} className="w-full h-40 object-cover" />
                <h3 className="py-4 text-[#264653] text-lg font-semibold">{label}</h3>
              </div>
            </Link>
          ) : (
            <div key={label} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-md transition">
              <img src={img} alt={label} className="w-full h-40 object-cover" />
              <h3 className="py-4 text-[#264653] text-lg font-semibold">{label}</h3>
            </div>
          )
        ))}
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 px-6 md:px-16 bg-[#fef6f3] text-center">
      <h2 className="text-3xl font-semibold text-[#264653] mb-12">Why Shop With Us?</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {[
          {
            img: '/shipping.svg',
            title: 'Free Shipping',
            desc: 'Enjoy fast & free delivery on all orders over $50.',
          },
          {
            img: '/security.svg',
            title: 'Secure Payments',
            desc: 'Pay confidently with our encrypted checkout process.',
          },
          {
            img: '/quality.svg',
            title: 'Premium Quality',
            desc: 'Curated products from trusted and top-rated brands.',
          },
        ].map(({ img, title, desc }) => (
          <div key={title} className="bg-white rounded-xl shadow-md p-6 w-72 text-center hover:-translate-y-1 transition">
            <img src={img} alt={title} className="h-16 mx-auto mb-4" />
            <h3 className="text-[#e76f51] text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-semibold text-[#264653] mb-10">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {[
          { quote: '"Amazing quality, fast delivery!"', name: '— Jane D.' },
          { quote: '"Stylish & affordable. Love it!"', name: '— Alex P.' },
        ].map(({ quote, name }) => (
          <div key={name} className="bg-gray-100 p-6 rounded-lg max-w-xs text-left">
            <p className="italic text-gray-600 mb-3">{quote}</p>
            <h4 className="text-[#264653] font-semibold">{name}</h4>
          </div>
        ))}
      </div>
    </section>

    {/* Newsletter */}
    <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-[#fef6f3] to-[#fcf2ef]">
      <h2 className="text-3xl font-semibold text-[#264653] mb-4">Stay in the Loop</h2>
      <p className="text-gray-600 mb-6">Subscribe for deals & updates</p>
      <form className="inline-flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 w-72 rounded-l-md border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#e76f51] hover:bg-[#d45d43] text-white rounded-md sm:rounded-l-none transition"
        >
          Subscribe
        </button>
      </form>
    </section>

    {/* Footer */}
    <footer className="bg-[#264653] text-gray-300 text-center py-8 text-sm">
      &copy; 2025 RetailVibe. Crafted for the colorful you.
    </footer>
  </div>
);

export default HomePage;
