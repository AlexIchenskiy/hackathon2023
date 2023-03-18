import React from 'react';
import backgroundImage from './path/to/image.jpg';

const Signup = () => {
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
          <div className='title' style={{ textAlign: 'center' }}>
            <h1>Spider Cyber Security</h1>
            <div>
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </div>
          {/* Your content here */}
        </div>
      );
    };

export default Signup;
