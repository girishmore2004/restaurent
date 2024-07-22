import React, { useState } from 'react';
// import Alert from './Alert'; // Import the Alert component

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
          showAlert('Reservation submitted successfully!', 'aqua'); // Show success message
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
    
  
  // Styles for the container
  const containerStyle = {
    backgroundColor: 'black',
    borderRadius: '15px',
    boxShadow: '0 0 20px aqua',
    padding: '10px',
    width: '500px',
    color: 'white',
    marginTop: '20px',
  };

  // Styles for the button
  const buttonStyle = {
    backgroundColor: 'aqua',
    color: 'black',
    border: 'none',
    borderRadius: '25px',
    marginTop: '7px',
    width: '130px',
    height: '44px',
    cursor: 'pointer',
    fontSize: '22px',
    marginLeft: '167px',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="text-center  mb-4" style={{color:"aqua"}}>Table Reservation</h2>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert" style={{backgroundColor:"grey"}}>
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={reservationDetails.name}
            onChange={handleChange}
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={reservationDetails.date}
            onChange={handleChange}
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={reservationDetails.time}
            onChange={handleChange}
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="partySize" className="form-label">Party Size</label>
          <input
            type="number"
            className="form-control"
            id="partySize"
            name="partySize"
            value={reservationDetails.partySize}
            onChange={handleChange}
            style={{ backgroundColor: 'rgb(107 117 118)', border: 'none', borderBottom: '3px solid aqua', color: 'aqua', marginTop: '4px', padding: '10px' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Reservation;
