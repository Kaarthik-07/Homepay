import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface AdminLoginProps {
  setAdminLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function AdminLogin({ setAdminLoggedIn }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleAdminLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/admin/login', {
        username,
        password
      });
      if (response.data.success) {
        setMessage(response.data.message);
        setAdminLoggedIn(true);
        alert("Admin logged in") 
        console.log('Admin logged in:', true); 
        navigate('/adminPage')
        //return <Navigate to="/adminPage" />;
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
<div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          className="w-full px-4 py-2 mb-4 border rounded-md"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 mb-4 border rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleAdminLogin}
        >
          Login
        </button>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
    </div>
  );
}

export default AdminLogin;
