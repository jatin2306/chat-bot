import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {isLogin ? 'Welcome Back!' : 'Create an Account'}
        </h2>

        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-3 bg-red-500 rounded-full text-white hover:bg-red-600 transition duration-300">
            <FaGoogle />
          </button>
          <button className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition duration-300">
            <FaFacebookF />
          </button>
          <button className="p-3 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition duration-300">
            <FaTwitter />
          </button>
          <button className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-900 transition duration-300">
            <FaGithub />
          </button>
        </div>

        <div className="text-center text-gray-500 mb-4">
          or {isLogin ? 'login' : 'sign up'} with your email
        </div>

        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                placeholder="John Doe"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            className="text-blue-500 hover:underline text-sm font-medium transition duration-300"
            onClick={toggleForm}
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
