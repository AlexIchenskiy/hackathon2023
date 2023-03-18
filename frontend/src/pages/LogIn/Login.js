import React from 'react';
import backgroundImage from '../../assets/images/pozadina.jpg';

const Login = () => {
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
        <div className='loginWindow' style={{ textAlign: 'center' }}>
          <h1>Log In</h1>
          <form>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />
            <br />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
