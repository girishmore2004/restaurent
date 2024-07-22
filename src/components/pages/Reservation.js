// import React, { useState } from 'react';
// // import Alert from './Alert'; // Import the Alert component

// const Reservation = () => {
//     const [reservationDetails, setReservationDetails] = useState({
//       name: '',
//       date: '',
//       time: '',
//       partySize: 1,
//     });
//     const [alert, setAlert] = useState(null); // State for managing alerts
  
//     const handleChange = (e) => {
//       setReservationDetails({ ...reservationDetails, [e.target.name]: e.target.value });
//     };
  
//     const showAlert = (message, type) => {
//       setAlert({ message, type }); // Set the alert message and type
//       setTimeout(() => {
//         setAlert(null); // Clear the alert after 3 seconds
//       }, 3000);
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await fetch('http://localhost:5000/api/userRoutes/reservation', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(reservationDetails),
//         });
  
//         const data = await response.json();
  
//         if (response.ok) {
//           console.log(data.message);
//           showAlert('Reservation submitted successfully!', 'aqua'); // Show success message
//           // Optionally, perform any UI updates or redirection after successful submission
//         } else {
//           console.error('Failed to submit reservation:', data.message);
//           showAlert('Details are incomplete', 'danger'); // Show error message
//           // Optionally, display an error message to the user
//         }
//       } catch (error) {
//         console.error('Failed to submit reservation:', error.message); 
//         showAlert('Reservation not submitted!', 'danger'); // Show error message
//         // Optionally, display an error message to the user
//       }
//     };
    
  
//   // Styles for the container
//   const containerStyle = {
//     backgroundColor: 'black',
//     borderRadius: '15px',
//     boxShadow: '0 0 20px aqua',
//     padding: '10px',
//     width: '500px',
//     color: 'white',
//     marginTop: '20px',
//   };

//   // Styles for the button
//   const buttonStyle = {
//     backgroundColor: 'aqua',
//     color: 'black',
//     border: 'none',
//     borderRadius: '25px',
//     marginTop: '7px',
//     width: '130px',
//     height: '44px',
//     cursor: 'pointer',
//     fontSize: '22px',
//     marginLeft: '167px',
//   };

//   return (
//     <div className="container" style={containerStyle}>
//       <h2 className="text-center  mb-4" style={{color:"aqua"}}>Table Reservation</h2>
//       {alert && (
//         <div className={`alert alert-${alert.type}`} role="alert" style={{backgroundColor:"grey"}}>
//           {alert.message}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={reservationDetails.name}
//             onChange={handleChange}
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="date" className="form-label">Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="date"
//             name="date"
//             value={reservationDetails.date}
//             onChange={handleChange}
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="time" className="form-label">Time</label>
//           <input
//             type="time"
//             className="form-control"
//             id="time"
//             name="time"
//             value={reservationDetails.time}
//             onChange={handleChange}
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="partySize" className="form-label">Party Size</label>
//           <input
//             type="number"
//             className="form-control"
//             id="partySize"
//             name="partySize"
//             value={reservationDetails.partySize}
//             onChange={handleChange}
//             style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Reservation;

import React, { useState } from 'react';
import styled from 'styled-components';

const Reservation = () => {
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    date: '',
    time: '',
    partySize: 1,
  });
  const [alert, setAlert] = useState(null); // State for managing alerts

  const handleChange = (e) => {
    setReservationDetails({ ...reservationDetails, [e.target.name]: e.target.value });
  };

  const showAlert = (message, type) => {
    setAlert({ message, type }); // Set the alert message and type
    setTimeout(() => {
      setAlert(null); // Clear the alert after 3 seconds
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/userRoutes/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationDetails),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        showAlert('Reservation submitted successfully!', 'success'); // Show success message
        // Optionally, perform any UI updates or redirection after successful submission
      } else {
        console.error('Failed to submit reservation:', data.message);
        showAlert('Details are incomplete', 'danger'); // Show error message
        // Optionally, display an error message to the user
      }
    } catch (error) {
      console.error('Failed to submit reservation:', error.message); 
      showAlert('Reservation not submitted!', 'danger'); // Show error message
      // Optionally, display an error message to the user
    }
  };

  return (
    <ReservationContainer>
      <h2>Table Reservation</h2>
      {alert && (
        <Alert className={`alert-${alert.type}`}>
          {alert.message}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservationDetails.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={reservationDetails.date}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={reservationDetails.time}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="partySize">Party Size</label>
          <input
            type="number"
            id="partySize"
            name="partySize"
            value={reservationDetails.partySize}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </ReservationContainer>
  );
};

const ReservationContainer = styled.div`
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 0 20px aqua;
  padding: 20px;
  color: white;
  margin: 2rem auto;
  max-width: 500px;

  h2 {
    color: aqua;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const Alert = styled.div`
  background-color: grey;
  color: white;
  padding: 10px;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    color: aqua;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 10px;
    background-color: rgb(107, 117, 118);
    border: none;
    border-bottom: 3px solid aqua;
    color: black;
  }
`;

const SubmitButton = styled.button`
  background-color: aqua;
  color: black;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.2rem;
  display: block;
  margin: 0 auto;
`;

export default Reservation;
