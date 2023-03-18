import React from 'react';
import backgroundImage from '../../assets/images/pozadina.jpg';

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
        <div className='signupWindow' style={{ textAlign: 'center' }}>
          <h1>Sign Up</h1>
          <form>
            <label htmlFor='username'>Username:</label>
            <input type='username' id='username' name='username' required />
            <br />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />
            <br />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signup;
