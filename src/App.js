import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Login from './components/pages/Login.js';
import Signup from './components/pages/Signup.js';
import Alert from './components/pages/Alert.js';
import About from './components/pages/About.js';
import Navbar from './components/pages/Navbar.js';
import Profile from './components/pages/Profile.js'; // New import
import './App.css';
// import { useEffect } from 'react';
import Forgot from './components/pages/Forgot.js'; 
import Menu from './components/pages/Menu.js'
import Order from './components/pages/Order.js';
import Reservation from './components/pages/Reservation.js'; 
import Contact from './components/pages/Contact.js'; 

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <Router>
      <Navbar />
      <Alert alert={alert} />
      <div className="container-1">
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/menu" element={<Menu showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/forgot" element={<Forgot showAlert={showAlert} />} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route path="/order" element={<Order />} /> 
          <Route path="/order/:foodName/:price" element={<Order />} />
          <Route path="/reservation" element={<Reservation />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/profile" element={<Profile />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
