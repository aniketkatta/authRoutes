import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name,setName]=useState('Aniket')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/auth/login')
  } 
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className="text-black">Register Please</h1>
      <form onSubmit={handleRegister} style={{ maxWidth: '300px', margin: 'auto' }}>
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
          Register
        </button>

        <Link to='/auth/register'>Go to Login</Link>
      </form>
    </div>
  );
};

export default Register;
