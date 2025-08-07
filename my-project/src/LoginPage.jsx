import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-200">
      <form className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-600 mb-6">Login to your RetailVibe account</p>

        <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          type="submit"
          className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-pink-500 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
