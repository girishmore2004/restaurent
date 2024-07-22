// import React from 'react';

// const About = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop:"2rem", height: '100vh' }}>
//       <div style={{ textAlign: 'center', maxWidth: '880px', padding: '20px', border: '2px solid aqua',boxShadow:'0 0 100px aqua', borderRadius: '10px', backgroundColor:'black', }}>
//         <div style={{ marginBottom: '20px', fontSize: '50px', color: 'aqua' }}>
//           🍽️ Welcome to MyRestaurant! 🍽️
//         </div>
//         <div style={{ marginBottom: '20px', fontSize: '22px', color: '#efad93' }}>
//           Discover a culinary oasis in the heart of [Location] at MyRestaurant. With [number] years of passionate service, we've become a cherished part of the community. Our mission? To craft exceptional dining experiences that linger in your memory long after the last bite.
//         </div>
//         <div style={{ marginBottom: '20px', fontSize: '22px', color: '#efad93' }}>
//           Step into our welcoming ambiance and immerse yourself in a world of flavor. Our chefs expertly blend locally-sourced ingredients into every dish, ensuring freshness and quality in every bite. From indulgent classics to innovative creations, there's something to satisfy every palate at MyRestaurant.
//         </div>
//         <div style={{ marginBottom: '20px', fontSize: '22px', color: '#efad93' }}>
//           Join us for an unforgettable dining journey, where attentive service and mouthwatering cuisine converge. Whether it's a romantic date night or a joyous celebration with loved ones, MyRestaurant sets the stage for cherished moments. Come, experience the magic of MyRestaurant, where every meal tells a story.
//         </div>
//         <div style={{ marginBottom: '20px', fontSize: '30px', color: 'aqua'}}>
//           🌟 Where Every Bite Tells a Tale! 🌟
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';

const About = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
      minHeight: '100vh',
      padding: '0 1rem',
      boxSizing: 'border-box', 
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '880px',
        width: '100%',
        padding: '20px',
        border: '2px solid aqua',
        boxShadow: '0 0 100px aqua',
        borderRadius: '10px',
        backgroundColor: 'black',
        color: '#fff',
        boxSizing: 'border-box'
      }}>
        <div style={{
          marginBottom: '20px',
          fontSize: 'clamp(1.5rem, 6vw, 50px)', // Responsive font size
          color: 'aqua'
        }}>
          🍽️ Welcome to MyRestaurant! 🍽️
        </div>
        <div style={{
          marginBottom: '20px',
          fontSize: 'clamp(1rem, 4vw, 22px)', // Responsive font size
          color: '#efad93',
          lineHeight: '1.6', // Improved text readability
        }}>
          Discover a culinary oasis in the heart of [Location] at MyRestaurant. With [number] years of passionate service, we've become a cherished part of the community. Our mission? To craft exceptional dining experiences that linger in your memory long after the last bite.
        </div>
        <div style={{
          marginBottom: '20px',
          fontSize: 'clamp(1rem, 4vw, 22px)', // Responsive font size
          color: '#efad93',
          lineHeight: '1.6', // Improved text readability
        }}>
          Step into our welcoming ambiance and immerse yourself in a world of flavor. Our chefs expertly blend locally-sourced ingredients into every dish, ensuring freshness and quality in every bite. From indulgent classics to innovative creations, there's something to satisfy every palate at MyRestaurant.
        </div>
        <div style={{
          marginBottom: '20px',
          fontSize: 'clamp(1rem, 4vw, 22px)', // Responsive font size
          color: '#efad93',
          lineHeight: '1.6', // Improved text readability
        }}>
          Join us for an unforgettable dining journey, where attentive service and mouthwatering cuisine converge. Whether it's a romantic date night or a joyous celebration with loved ones, MyRestaurant sets the stage for cherished moments. Come, experience the magic of MyRestaurant, where every meal tells a story.
        </div>
        <div style={{
          marginBottom: '20px',
          fontSize: 'clamp(1.5rem, 5vw, 30px)', // Responsive font size
          color: 'aqua'
        }}>
          🌟 Where Every Bite Tells a Tale! 🌟
        </div>
      </div>
    </div>
  );
}

export default About;
