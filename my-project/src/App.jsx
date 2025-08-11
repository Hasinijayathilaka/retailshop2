import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Contact from './Contact';  // ✅ Import Contact component
import './index.css';
import Women from './Pages/wome';
import Men from './Pages/Men';
import Accessories from './Pages/Accessories';
import Sale from './Pages/Sale';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/category/women" element={<Women />}/>
        <Route path="/category/Men" element={<Men />}/>
         <Route path="/category/Accessories" element={<Accessories />}/>
         <Route path="/category/Sale" element={<Sale />}/>
         <Route path="/cart" element={<Cart/>}/>
         
      </Routes>
    </Router>
  );
}

export default App;
