import React, { useState } from 'react';
import {Alert } from 'react-bootstrap';
import axios from 'axios';
import './signin.css';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validationError, setValidationError] = useState('');
  const [isSignUp, setSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setSignUp(true);
  };

  const handleSignInClick = (e) => {
    e.preventDefault();
    setSignUp(false);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Password length validation, etc. (same as before)
  
    try {
      const endpoint = isSignUp ? 'signup' : 'signin';
      const response = await axios.post(`http://localhost:3001/api/auth/${endpoint}`, formData);
  
      // Handle successful signup/signin response (e.g., redirect to dashboard)
      console.log(`${isSignUp ? 'Signup' : 'Signin'} successful:`, response.data);
  
      // Clear the form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      // Handle signup/signin error (e.g., display an error message)
      console.error(`${isSignUp ? 'Signup' : 'Signin'} error:`, error.response.data);
      setValidationError(error.response.data.message || `${isSignUp ? 'Signup' : 'Signin'} failed`);
    }
  };
  

  return (
    <div className="container">
      <div className={`forms-wrapper ${isSignUp ? 'change' : ''}`}>
        <form className={`signin-form ${isSignUp ? 'change' : ''}`} onSubmit={handleSubmit}>
          <a href="#" className="signup-btn" onClick={handleSignUpClick}>
            Sign Up
          </a>
          <h2>Sign In</h2>
          <div className="inputs-wrapper">
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input type="submit" value="Sign In" />
          </div>
        </form>
        <form className={`signup-form ${isSignUp ? 'change' : ''}`} onSubmit={handleSubmit}>
          <a href="#" className="signin-btn" onClick={handleSignInClick}>
            Sign In
          </a>
          <h2>Sign Up</h2>
          <div className="inputs-wrapper">
            <input
              type="text"
              placeholder="Your Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Link to={`/a`}>
            <input type="submit" value="Sign Up" />
            </Link>
          </div>
        </form>
      </div>

      {validationError && <Alert variant="danger">{validationError}</Alert>}
    </div>
  );
};

export default SignupForm;
