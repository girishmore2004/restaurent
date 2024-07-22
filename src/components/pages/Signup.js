// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Signup = (props) => {
// //   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
// //   const [error, setError] = useState('');

// //   let navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (credentials.password !== credentials.cpassword) {
// //       setError('Passwords do not match');
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:5000/api/userRoutes/signup", {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
// //       });

// //       const json = await response.json();

// //       if (response.ok) {
// //         // Save the auth token and redirect
// //         localStorage.setItem('token', json.token);
// //         navigate("/");
// //         props.showAlert("Account Created Successfully", "success");
// //       } else {
// //         setError(json.message || 'Signup failed');
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError('Signup failed');
// //     }
// //   }

// //   const onChange = (e) => {
// //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //   }

// //   return (
// //     <div className="container mt-3">
// //       <h2 className='my-2'>Create an account to use Mynotebook</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-3">
// //           <label htmlFor="name" className="form-label">Name</label>
// //           <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label">Email address</label>
// //           <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
// //           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="password" className="form-label">Password</label>
// //           <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="cpassword" className="form-label">Confirm Password</label>
// //           <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
// //         </div>

// //         <button type="submit" className="btn btn-primary">Submit</button>
// //         {error && <p>{error}</p>}
// //       </form>
// //     </div>
// //   );
// // }

// // export default Signup;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = (props) => {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
//   const [error, setError] = useState('');
//   const [isHovered, setIsHovered] = useState(false); // State to manage hover

//   let navigate = useNavigate();

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (credentials.password !== credentials.cpassword) {
//   //     setError('Passwords do not match');
//   //     return;
//   //   }

//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/userRoutes/signup", {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
//   //     });

//   //     const json = await response.json();

//   //     if (response.ok) {
//   //       // Save the auth token and redirect
//   //       localStorage.setItem('token', json.token);
//   //       navigate("/");
//   //       props.showAlert("Account Created Successfully", "success");
//   //     } else {
//   //       setError(json.message || 'Signup failed');
//   //     }
//   //   } catch (err) {
//   //     console.error(err);
//   //     setError('Signup failed');
//   //   }
//   // }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (credentials.password !== credentials.cpassword) {
//       setError('Passwords do not match');
//       return;
//     }
  
//     try {
//       const response = await fetch("http://localhost:5000/api/userRoutes/signup", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
//       });
  
//       const json = await response.json();
  
//       if (response.ok) {
//         // Save the auth token and redirect
//         localStorage.setItem('token', json.token);
//         navigate("/");
//         props.showAlert("Account Created Successfully", "success");
//       } else {
//         setError(json.message || 'Signup failed');
//         console.error('Error details:', json.errors); // Log detailed errors to console
//       }
//     } catch (err) {
//       console.error('Signup failed:', err);
//       setError('Signup failed');
//     }
//   }
  
//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   }

//   // Styles for the container
//   const containerStyle = {
//     backgroundColor: 'black',
//     borderRadius: '15px',
//     boxShadow: '0 0 20px aqua',
//     padding: '20px',
//     width: '500px',
//     color: 'white',
//     marginTop: '3rem',
//   };

//   // Styles for the button
//   const buttonStyle = {
//     backgroundColor: isHovered ? 'black' : 'aqua',
//     color: isHovered ? 'white' : 'black',
//     border: isHovered ? '3px solid aqua' : 'none',
//     borderRadius: '25px',
//     marginTop: '7px',
//     marginBottom:'15px',
//     width: '130px',
//     height: '44px',
//     cursor: 'pointer',
//     fontSize: '22px',
//     marginLeft:'167px' 
//   };

//   return (
//     <div className="container mt-3" style={containerStyle}>
//       <h2 className="my-2" style={{ color: "aqua", textAlign: "center" }}>SignUp</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label" style={{ textAlign: "start" }}>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             onChange={onChange}
//             aria-describedby="emailHelp"
//             required
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label" style={{ textAlign: "start" }}>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             onChange={onChange}
//             aria-describedby="emailHelp"
//             required
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
//           />
//           <div id="emailHelp" className="form-text" style={{ color: 'white' }}>We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label" style={{ textAlign: "start" }}>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             onChange={onChange}
//             minLength={6}
//             required
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label" style={{ textAlign: "start" }}>Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="cpassword"
//             name="cpassword"
//             onChange={onChange}
//             minLength={6}
//             required
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'black', marginTop: '4px', padding: '10px' }}
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//           style={buttonStyle}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           Submit
//         </button>
//         {error && <p className="text-danger" style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/userRoutes/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem('token', json.token);
        navigate("/");
        props.showAlert("Account Created Successfully", "success");
      } else {
        setError(json.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      setError('Signup failed');
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  // Styles for the container
  const containerStyle = {
    backgroundColor: 'black',
    borderRadius: '15px',
    boxShadow: '0 0 20px aqua',
    padding: '20px',
    color: 'white',
    marginTop: '3rem',
    maxWidth: '900px',
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
    <div className="container mt-1 d-flex justify-content-center">
      <div className="row w-100">
        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto" style={containerStyle}>
          <h2 className="my-3 text-center" style={{ color: "aqua" }}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={onChange}
                required
                style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', padding: '10px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChange}
                required
                style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', padding: '10px' }}
              />
              <div id="emailHelp" className="form-text" style={{ color: 'white' }}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
                minLength={6}
                required
                style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', padding: '10px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                onChange={onChange}
                minLength={6}
                required
                style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', padding: '10px' }}
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
        </div>
      </div>
    </div>
  );
};

export default Signup;

