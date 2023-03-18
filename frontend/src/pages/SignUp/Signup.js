import React from 'react';
import backgroundImage from '../../assets/images/pozadina.jpg';

const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="signupWindow text-center">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <form className="mb-4">
          <label htmlFor='username' className="block font-medium text-gray-700 mb-2">Username:</label>
          <input type='username' id='username' name='username' required className="w-full p-2 border border-gray-400 rounded-md mb-4" />
          <label htmlFor='email' className="block font-medium text-gray-700 mb-2">Email:</label>
          <input type='email' id='email' name='email' required className="w-full p-2 border border-gray-400 rounded-md mb-4" />
          <label htmlFor='password' className="block font-medium text-gray-700 mb-2">Password:</label>
          <input type='password' id='password' name='password' required className="w-full p-2 border border-gray-400 rounded-md mb-4" />
          <button type='submit' className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;