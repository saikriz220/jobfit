import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';
import './login.scss';
import api from '../../axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleLogin = async () => {
    setError(null);

    try {
        // Call the login API
        const response = await api.post('/api/user/login', { email, password });
  
        // Extract userName and userType from the API response
        const { user_name, user_type } = response.data;

    const userName = user_name;
    const userType = user_type;
  
        // Update context with userName and userType
        login(userName, userType);
  
        // Navigate to the home page
        navigate('/home');
      } catch (err) {
        setError(err.response?.data?.message || 'Login failed');
        window.alert('Login failed');
      }
    };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
