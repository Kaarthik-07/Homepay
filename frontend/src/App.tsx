import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminLogin from './admin';
import UserLogin from './user';
import AdminPage from './components/adminPage';
import UserPage from './userPage';

function Home() {
  return <h2>Home</h2>;
}

function App() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <Router>
      <div className="container mx-auto px-4">
        <nav className="py-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-blue-600 hover:text-blue-800">
                Admin Login
              </Link>
            </li>
            <li>
              <Link to="/user" className="text-blue-600 hover:text-blue-800">
                User Login
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/admin" element={<AdminLogin setAdminLoggedIn={setAdminLoggedIn} />} />
          <Route path="/user" element={<UserLogin setUserLoggedIn={setUserLoggedIn} />} />
          {adminLoggedIn && <Route path="/adminPage" element={<AdminPage isLoggedIn={true} />} />}
          {userLoggedIn && <Route path="/userPage" element={<UserPage isLoggedIn={true} />} />}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
