import React from 'react';
import Login from '../../components/LogIn.js';
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
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
        {/* Your content here */}

        <>
        <Login />
        </>
      </div>
    );
  };

export default Home;
