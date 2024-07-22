// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Home from './components/pages/Home.js';
// // import Login from './components/pages/Login.js';
// // import Signup from './components/pages/Signup.js';
// // import Alert from './components/pages/Alert.js';
// // import About from './components/pages/About.js';
// // import Navbar from './components/pages/Navbar.js';
// // import Profile from './components/pages/Profile.js'; // New import
// // import './App.css';
// // // import { useEffect } from 'react';
// // import Forgot from './components/pages/Forgot.js'; 
// // import Menu from './components/pages/Menu.js'
// // import Order from './components/pages/Order.js';
// // import Reservation from './components/pages/Reservation.js'; 
// // import Contact from './components/pages/Contact.js'; 

// // const App = () => {
// //   const [alert, setAlert] = useState(null);
// //   const showAlert = (message, type) => {
// //     setAlert({
// //       msg: message,
// //       type: type
// //     });
// //     setTimeout(() => {
// //       setAlert(null);
// //     }, 1500);
// //   };
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Alert alert={alert} />
// //       <div className="container-1">
// //         <Routes>
// //           <Route path="/" element={<Home showAlert={showAlert} />} />
// //           <Route path="/menu" element={<Menu showAlert={showAlert} />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/login" element={<Login showAlert={showAlert} />} />
// //           <Route path="/forgot" element={<Forgot showAlert={showAlert} />} />
// //           <Route path="/signup" element={<Signup showAlert={showAlert} />} />
// //           <Route path="/order" element={<Order />} /> 
// //           <Route path="/order/:foodName/:price" element={<Order />} />
// //           <Route path="/reservation" element={<Reservation />} /> 
// //           <Route path="/contact" element={<Contact />} /> 
// //           <Route path="/profile" element={<Profile />} /> {/* New route */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// import React, { useState, useContext } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Home from './components/pages/Home.js';
// import Login from './components/pages/Login.js';
// import Signup from './components/pages/Signup.js';
// import Alert from './components/pages/Alert.js';
// import About from './components/pages/About.js';
// import Navbar from './components/pages/Navbar.js';
// import Profile from './components/pages/Profile.js'; // New import
// import './App.css';
// import Forgot from './components/pages/Forgot.js'; 
// import Menu from './components/pages/Menu.js'
// import Order from './components/pages/Order.js';
// import Reservation from './components/pages/Reservation.js'; 
// import Contact from './components/pages/Contact.js';  

// const App = () => {
//   const [alert, setAlert] = useState(null);
//   const { isAuthenticated } = useContext(AuthContext); // Get authentication status from context

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };
//   useEffect(() => {
//     // Check if the user is authenticated (for example, if a token exists in local storage)
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);
//   return (
//     <Router>
//       <Navbar />
//       <Alert alert={alert} />
//       <div className="container-1">
//         <Routes>
//           <Route path="/" element={<Home showAlert={showAlert} />} />
//           <Route path="/menu" element={<Menu showAlert={showAlert} />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login showAlert={showAlert} />} />
//           <Route path="/forgot" element={<Forgot showAlert={showAlert} />} />
//           <Route path="/signup" element={<Signup showAlert={showAlert} />} />
//           <Route path="/order" element={isAuthenticated ? <Order /> : <Navigate to="/login" />} />
//           <Route path="/order/:foodName/:price" element={isAuthenticated ? <Order /> : <Navigate to="/login" />} />
//           <Route path="/reservation" element={<Reservation />} /> 
//           <Route path="/contact" element={<Contact />} /> 
//           <Route path="/profile" element={<Profile />} /> {/* New route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Alert from './components/pages/Alert';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import Profile from './components/pages/Profile'; 
import Forgot from './components/pages/Forgot'; 
import Menu from './components/pages/Menu';
import Order from './components/pages/Order';
import Reservation from './components/pages/Reservation'; 
import Contact from './components/pages/Contact'; 
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
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
          <Route 
            path="/order" 
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/order/:foodName/:price" 
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            } 
          />
          <Route path="/reservation" element={<Reservation />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } 
          /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
