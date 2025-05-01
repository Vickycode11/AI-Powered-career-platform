import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../assets/blur.jpg'; // Ensure the correct path to your image

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!formData.agreedToTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert('Sign-up successful!');
      navigate('/login');
    } catch (err) {
      console.error('Sign-up error:', err);
      setError('Error during sign-up.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Typography variant="h5" color="white">
          Create Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            fullWidth
            required
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
          />
          {error && <Typography color="error">{error}</Typography>}
          <label style={{ color: 'white', display: 'block', marginTop: '10px' }}>
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleInputChange}
              style={{ marginRight: '10px' }}
            />
            I agree to the{' '}
            <Link to="/TermsAndConditionsPage" style={{ color: '#00bcd4', textDecoration: 'none' }}>
              Terms and Conditions
            </Link>
          </label>
          <Button type="submit" variant="contained" fullWidth disabled={loading} sx={{ marginTop: 2 }}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
