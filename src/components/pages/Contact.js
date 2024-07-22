
// import React from 'react';
// import styled from 'styled-components';

// const Contact = () => {
//   const containerStyle = {
//     backgroundColor: 'black',
//     borderRadius: '15px',
//     boxShadow: '0 0 20px aqua',
//     padding: '20px',
//     width: '500px',
//     color: 'white',
//     marginTop: '7rem',
//   };

//   return (
//     <div className="container" style={containerStyle}>
//       <h2 className="my-2" style={{ color: 'aqua', textAlign: 'center' }}>Contact Us</h2>
//       <ContactInfo>
//         <p><strong>Phone:</strong> +1 (123) 456-7890</p>
//         <p><strong>Email:</strong> info@example.com</p>
//         <p><strong>Address:</strong> 1234 Main St, City, Country</p>
//       </ContactInfo>
//     </div>
//   );
// };

// const ContactInfo = styled.div`
//   p {
//     margin-bottom: 10px;
//     font-size: 18px;
//   }

//   strong {
//     color: aqua;
//   }
// `;

// export default Contact;

import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <h2 className="my-2 " style={{textAlign:"center", fontSize:"50px"}}>Contact Us</h2>
      <ContactInfo style={{marginTop:"2rem"}}>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Address:</strong> 1234 Main St, City, Country</p>
      </ContactInfo>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 0 20px aqua;
  padding: 20px;
  width: 90%; /* Flexible width */
  max-width: 500px; /* Maximum width */
  color: white;
  margin: 7rem auto; /* Center the container and margin from top */
  
  @media (max-width: 768px) {
    width: 95%; /* Increase width on smaller screens */
  }
  
  @media (max-width: 480px) {
    width: 100%; /* Full width on very small screens */
    margin: 5rem auto; /* Adjust top margin for very small screens */
  }
`;

const ContactInfo = styled.div`
  p {
    text-align:center;
    margin-bottom: 10px;
    font-size: 30px;
  }

  strong {
    color: aqua;
  }

  /* Media query for responsiveness */
  @media (max-width: 768px) {
    p {
      font-size: 16px; /* Adjust font size for smaller screens */
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 14px; /* Further adjust font size for very small screens */
    }
  }
`;

export default Contact;
