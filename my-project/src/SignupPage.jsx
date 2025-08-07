import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Sign up successful! You can now login.');
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-100 to-cyan-200">
      <form
        className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-teal-700 mb-1">Create Account</h2>
        <p className="text-sm text-gray-600 mb-6">Join RetailVibe today</p>

        <label htmlFor="username" className="block font-semibold text-gray-700 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.username && (
          <p className="text-red-600 text-sm mb-2 -mt-1">{errors.username}</p>
        )}

        <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-2 -mt-1">{errors.email}</p>
        )}

        <label htmlFor="password" className="block font-semibold text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2 -mt-1">{errors.password}</p>
        )}

        <label htmlFor="confirmPassword" className="block font-semibold text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm mb-2 -mt-1">{errors.confirmPassword}</p>
        )}

        <button
          type="submit"
          className="w-full mt-4 py-3 bg-teal-700 hover:bg-teal-900 text-white font-semibold rounded-md transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-teal-700 font-medium hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
