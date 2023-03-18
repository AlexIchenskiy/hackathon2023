import React from 'react';
import backgroundImage from '../../assets/images/pozadina.jpg';

const Login = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="loginWindow text-center">
        <h1 className="text-3xl font-bold mb-6">Log In</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-200 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="bg-gray-200 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;