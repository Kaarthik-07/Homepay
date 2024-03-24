import React, { useState } from 'react';
import axios from 'axios';
import UserPay from './components/userpay';
//@ts-ignore
function UserLogin({ setUserLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email,
        password
      });
      //console.log(response);
      
      if (response.data.success) {
        setMessage(response.data.message);
        setUserLoggedIn(true);
        setLoggedIn(true);
        alert("User logged in")
      } 
    } 
    catch (error) {
      setMessage('Invalid credentials');
      
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        <input
          className="w-full px-4 py-2 mb-4 border rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleUserLogin}
        >
          Login
        </button>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
      {loggedIn && <UserPay />}
    </div>
  );
}

export default UserLogin;
