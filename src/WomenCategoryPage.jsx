import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WomenCategoryPage.css';

const products = [
  { id: 1, name: 'Women’s Sneakers', price: 59.99, img: '/1.jpg' },
  { id: 2, name: 'Women’s Watch', price: 129.99, img: '/2.jpg' },
  { id: 3, name: 'Women’s Handbag', price: 89.99, img: '/3.jpg' },
  { id: 4, name: 'Women’s Sunglasses', price: 75.0, img: '/4.jpg' },
];

const WomenCategoryPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="women-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Women</span>
      </div>

      <h1>Women’s Collection</h1>

      <div className="women-grid">
        {products.map((p) => (
          <div key={p.id} className="women-card">
            <div className="img-wrapper">
              <img src={p.img} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p className="price">${p.price.toFixed(2)}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <Link to="/cart" className="cart-icon" aria-label="View Cart">
        🛒
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </Link>
    </div>
  );
};

export default WomenCategoryPage;
