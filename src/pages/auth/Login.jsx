import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mocked login credentials (replace this with actual API call)
    const mockCredentials = {
      email: 'test@example.com',
      password: 'password123',
    };

    // Check credentials
    if (email === mockCredentials.email && password === mockCredentials.password) {
      // Mock token and userRole
      const token = 'mock-token-123';
      const userRole = 'productManager';

      // Store in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', userRole);
    } 

          // Navigate to the appropriate dashboard
    if (localStorage.getItem('userRole') === 'productManager') navigate('/productManager');
    else if (localStorage.getItem('userRole') === 'platformUser') navigate('/platformUser/dashboard');
    else navigate('/companyUser');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className="text-black">Login Please</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: 'auto' }}>
        <div>
          <label >Email:</label>
          <input
            type="email"
          
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border outline-none '
            style={{ display: 'block', width: '100%', margin: '10px 0' }}
          />
        </div>
        <div>
          <label >Password:</label>
          <input
            type=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border outline-none '
            style={{ display: 'block', width: '100%', margin: '10px 0' }}
          />
        </div>
        <button type="submit" className='border ' style={{ padding: '10px 20px', marginTop: '10px' }}>
          Login
        </button>

        <Link to='/auth/register'>Go to Register</Link>
      </form>
    </div>
  );
};

export default Login;
