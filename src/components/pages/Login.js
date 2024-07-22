// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';

// // const Login = (props) => {
// //   const [credentials, setCredentials] = useState({ email: "", password: "" });
// //   const [error, setError] = useState('');
// //   const [isHovered, setIsHovered] = useState(false); // State to manage hover
// //   let navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:5000/api/userRoutes/login", {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ email: credentials.email, password: credentials.password })
// //       });

// //       const json = await response.json();

// //       if (response.ok) {
// //         localStorage.setItem('token', json.token);
// //         navigate("/");
// //         props.showAlert("Logged in Successfully", "success");
// //       } else {
// //         setError(json.message || 'Login failed');
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError('Login failed');
// //     }
// //   }

// //   const onChange = (e) => {
// //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //   }

// //   // Styles for the container
// //   const containerStyle = {
// //     backgroundColor: 'black',
// //     borderRadius: '15px',
// //     boxShadow: '0 0 20px aqua',
// //     padding: '20px',
// //     width: '500px',
// //     color: 'white',
// //     marginTop: '3rem',
// //   };

// //   // Styles for the button
// //   const buttonStyle = {
// //     backgroundColor: isHovered ? 'black' : 'aqua',
// //     color: isHovered ? 'white' : 'black',
// //     border: isHovered ? '3px solid aqua' : 'none',
// //     borderRadius: '25px',
// //     marginTop: '7px',
// //     marginBottom:'15px',
// //     width: '130px',
// //     height: '44px',
// //     cursor: 'pointer',
// //     fontSize: '22px',
// //     marginLeft:'167px' 
// //   };

// //   return (
// //     <div className="container mt-3" style={containerStyle}>
// //       <h2 className="my-2" style={{ color: "aqua",textAlign:"center"}}>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label" style={{textAlign:"start"}}>Email address</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             value={credentials.email}
// //             onChange={onChange}
// //             id="email"
// //             name="email"
// //             aria-describedby="emailHelp"
// //             required
// //             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
// //           />
// //           <div id="emailHelp" className="form-text" style={{ color: 'white' }}>We'll never share your email with anyone else.</div>
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="password" className="form-label">Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             value={credentials.password}
// //             onChange={onChange}
// //             id="password"
// //             name="password"
// //             required
// //             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="btn btn-primary"
// //           style={buttonStyle}
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //         >
// //           Submit
// //         </button>
// //         {error && <p className="text-danger" style={{ color: 'red' }}>{error}</p>}
// //       </form>
// //       <Link to="/forgot" style={{color: 'aqua' }}>Forgot Password?</Link>
// //       <p style={{marginTop:"10px"}}>Not a member? <a href="/Signup" style={{color: 'aqua' }}>Sign Up</a></p>
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = ({ showAlert }) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [error, setError] = useState('');
//   const [isHovered, setIsHovered] = useState(false);
//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/userRoutes/login", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials)
//       });

//       const json = await response.json();
//       if (response.ok) {
//         localStorage.setItem('authToken', json.token);
//         navigate("/");
//         showAlert("Logged in Successfully", "success");
//       } else {
//         setError(json.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Login failed');
//     }
//   };

//   const onChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

//   return (
//     <div className="container mt-5 d-flex justify-content-center">
//       <div className="row w-100">
//         <div className="col-md-8 col-lg-6 col-xl-4 mx-auto bg-dark text-white p-4 rounded shadow">
//           <h2 className="text-center mb-4 text-info">Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input
//                 type="email"
//                 className="form-control bg-secondary border-0 text-white"
//                 value={credentials.email}
//                 onChange={onChange}
//                 id="email"
//                 name="email"
//                 aria-describedby="emailHelp"
//                 required
//               />
//               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control bg-secondary border-0 text-white"
//                 value={credentials.password}
//                 onChange={onChange}
//                 id="password"
//                 name="password"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn"
//               style={{
//                 backgroundColor: isHovered ? 'black' : 'aqua',
//                 color: isHovered ? 'white' : 'black',
//                 border: isHovered ? '3px solid aqua' : 'none',
//                 borderRadius: '25px',
//                 fontSize: '18px',
//                 width: '100%',
//               }}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               Submit
//             </button>
//             {error && <p className="text-danger mt-3">{error}</p>}
//           </form>
//           <div className="mt-3 text-center">
//             <Link to="/forgot" className="text-info d-block">Forgot Password?</Link>
//             <p className="mt-2">Not a member? <Link to="/signup" className="text-info">Sign Up</Link></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ showAlert }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State to manage hover
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/userRoutes/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem('token', json.token);
        navigate("/");
        showAlert("Logged in Successfully", "success");
      } else {
        setError(json.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed');
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  // Styles for the container
  const containerStyle = {
    backgroundColor: '#000',
    borderRadius: '15px',
    boxShadow: '0 0 20px aqua',
    padding: '20px',
    color: '#fff',
    maxWidth: '500px',
    margin: '3rem auto'
  };

  // Styles for the button
  const buttonStyle = {
    backgroundColor: isHovered ? 'black' : 'aqua',
    color: isHovered ? 'white' : 'black',
    border: isHovered ? '3px solid aqua' : 'none',
    borderRadius: '25px',
    marginTop: '7px',
    marginBottom: '15px',
    width: '100%',
    height: '44px',
    cursor: 'pointer',
    fontSize: '22px',
    display: 'block',
    margin: '0 auto'
  };

  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className="row w-100">
        <div className="col-md-8 col-lg-6 col-xl-4 mx-auto" style={containerStyle}>
          <h2 className="my-3 text-center" style={{ color: "aqua" }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={credentials.email}
                onChange={onChange}
                id="email"
                name="email"
                aria-describedby="emailHelp"
                required
                style={{ backgroundColor: '#6c757d', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', padding: '10px' }}
              />
              <div id="emailHelp" className="form-text" style={{ color: 'white' }}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={credentials.password}
                onChange={onChange}
                id="password"
                name="password"
                required
                style={{ backgroundColor: '#6c757d', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', padding: '10px' }}
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Submit
            </button>
            {error && <p className="text-danger" style={{ color: 'red' }}>{error}</p>}
          </form>
          <div className="mt-3 text-center">
            <Link to="/forgot" style={{ color: 'aqua' }}>Forgot Password?</Link>
            <p className="mt-2">Not a member? <Link to="/signup" style={{ color: 'aqua' }}>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
