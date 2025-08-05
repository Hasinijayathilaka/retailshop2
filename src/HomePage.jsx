import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <header className="header">
      <div className="logo">🌟 RetailVibe</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/deals" className="nav-link">Deals</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/login" className="auth-link">Login</Link>
        <Link to="/signup" className="auth-link">Sign Up</Link>
      </nav>
    </header>

<section
  className="hero"
  style={{ backgroundImage: "url('/8.jpg')" }}
>
  <h1>Discover Style. Shop Smart.</h1>
  <p>Exclusive collections, trendy looks & unbeatable deals!</p>
  <button className="cta-button">Start Shopping</button>
</section>

<section className="categories">
  <h2>Shop by Category</h2>
  <div className="cat-grid">
 {[
  { label: 'Women', img: '/4.jpg', link: '/category/women' },
  { label: 'Men', img: '/5.jpg' },
  { label: 'Accessories', img: '/6.jpg' },
  { label: 'Sale', img: '/7.jpg' }
].map(({ label, img, link }) => (
  link ? (
    <Link to={link} key={label} className="cat-card-link">
      <div className="cat-card">
        <img src={img} alt={label} />
        <h3>{label}</h3>
      </div>
    </Link>
  ) : (
    <div key={label} className="cat-card">
      <img src={img} alt={label} />
      <h3>{label}</h3>
    </div>
  )
))}

  </div>
</section>




    <section className="benefits">
  <h2>Why Shop With Us?</h2>
  <div className="benefit-grid">
    <div className="benefit-card">
      <img src="/shipping.svg" alt="Free Shipping" />
      <h3>Free Shipping</h3>
      <p>Enjoy fast & free delivery on all orders over $50.</p>
    </div>
    <div className="benefit-card">
      <img src="/security.svg" alt="Secure Payments" />
      <h3>Secure Payments</h3>
      <p>Pay confidently with our encrypted checkout process.</p>
    </div>
    <div className="benefit-card">
      <img src="/quality.svg" alt="Top Quality" />
      <h3>Premium Quality</h3>
      <p>Curated products from trusted and top-rated brands.</p>
    </div>
  </div>
</section>


    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="test-grid">
        <div className="test-item">
          <p>"Amazing quality, fast delivery!"</p>
          <h4>— Jane D.</h4>
        </div>
        <div className="test-item">
          <p>"Stylish & affordable. Love it!"</p>
          <h4>— Alex P.</h4>
        </div>
      </div>
    </section>

    <section className="newsletter">
      <h2>Stay in the Loop</h2>
      <p>Subscribe for deals & updates</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>

    <footer className="footer">&copy; 2025 RetailVibe. Crafted for the colorful you.</footer>
  </div>
);

export default HomePage;
