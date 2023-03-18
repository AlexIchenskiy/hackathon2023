import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/pozadina.jpg';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Spider Cyber Security</h1>
        <div>
          <Link to='/login'>
            <button className="mr-4 px-6 py-3 rounded-lg text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:shadow-outline">Log In</button>
          </Link>
          <Link to='/signup'>
            <button className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;