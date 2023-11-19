import React, { useState } from 'react';
import treas from '../Image/treas.png'
import admin from '../Image/admin.png';
import logo from '../Image/Logo.png';
import './SignUpPage.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };
  const resetForm = () => {
    const inputFields = document.querySelectorAll('.input-field input');
    inputFields.forEach(input => {
      input.value = '';
    });
  };

  // // Checking for validation admin
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    //     axios.post('/api/admin/login', { username, password })
    //         .then(response => {
    //             if (response.data === 'Login successful') {
    //               window.location = '/admin-dashboard';
    //             } else {
    //                 alert('Login failed');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleLogin}>
              <Link to="/"><img src={logo} alt='logo' className='logo2'/></Link>
              <h2 className="title">Admin Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />

                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="#" className="sign-up-form">
            <Link to="/"><img src={logo} alt='logo' className='logo1'/></Link>
            <h2 className="title">Treasurer Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
          </form>
          
        </div>
      </div>
      <div className="panels-container">
        <div className={`panel left-panel ${isSignUpMode ? '' : 'panel-active'}`}>
          <div className="content">
            <h1>Treasurer Login</h1>
            <p>
            Treasurer, please click here to access your account on the Treasurer's page.
            </p>
            <button className="btn transparent" onClick={() => { toggleMode(); resetForm(); }}>
              Sign In
            </button>
          </div>
          <img src={admin} className="image" alt="admin" />
        </div>
        <div className={`panel right-panel ${isSignUpMode ? 'panel-active' : ''}`}>
          <div className="content">
            <h1>Admin Login</h1><br/>
            <p>
              Admin, please click here to access your account on the Admin's page.
            </p>
            <button className="btn transparent" onClick={() => { toggleMode(); resetForm(); }}>
              Sign in
            </button>
          </div>
          <img src={treas} className="image" alt="Treasurer" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
