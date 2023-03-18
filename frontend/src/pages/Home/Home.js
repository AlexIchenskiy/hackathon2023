import React from 'react';
import {Link} from 'react-router-dom';
import backgroundImage from '../../assets/images/Human-factor_cybersecurity.webp';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className='homeTitle' style={{ textAlign: 'center' }}>
        <h1>Spider Cyber Security</h1>
        <div>
          
          <Link to='/login'>
            <button>Log In</button>
          </Link>
          <Link to='/signup'>
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;