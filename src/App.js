import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import WomenCategoryPage from './WomenCategoryPage';
import Contact from './Contact';  // ✅ Import Contact component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/category/women" element={<WomenCategoryPage />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ Add Contact route */}
      </Routes>
    </Router>
  );
}

export default App;
