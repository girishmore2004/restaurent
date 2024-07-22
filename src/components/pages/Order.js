// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';

// // const Order = () => {
// //   const { foodName, price } = useParams();
// //   const [menuItems, setMenuItems] = useState([]);
// //   const [user, setUser] = useState('');
// //   const [items, setItems] = useState([{ product: foodName || '', quantity: 1, price: parseFloat(price) || 0.0 }]);
// //   const [totalAmount, setTotalAmount] = useState(parseFloat(price) || 0.0);
// //   const [message, setMessage] = useState('');
// //   const [isHovered, setIsHovered] = useState(false); // State to manage hover
// //   let navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchMenuItems = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/menuRoutes/');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch menu items');
// //         }
// //         const data = await response.json();
// //         const fetchedItems = data.menuItems.map(item => ({
// //           ...item,
// //           price: parseFloat(item.price)
// //         }));
// //         setMenuItems(fetchedItems);
// //       } catch (error) {
// //         console.error('Failed to fetch menu items:', error.message);
// //       }
// //     };

// //     const fetchUserName = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/userRoutes/getUserName');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch user name');
// //         }
// //         const data = await response.json();
// //         setUser(data.userName);
// //       } catch (error) {
// //         console.error('Failed to fetch user name:', error.message);
// //       }
// //     };

// //     fetchMenuItems();
// //     fetchUserName();
// //   }, []);

// //   const handleItemSelection = (index, e) => {
// //     const selectedItem = menuItems.find(item => item.name === e.target.value);
// //     if (selectedItem) {
// //       const newItems = [...items];
// //       newItems[index] = { product: selectedItem.name, quantity: 1, price: selectedItem.price };
// //       setItems(newItems);

// //       const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //       setTotalAmount(newTotalAmount);
// //     }
// //   };

// //   const handleChange = (index, field, value) => {
// //     const newItems = [...items];
// //     newItems[index][field] = field === 'quantity' ? parseInt(value) : value;

// //     const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //     setTotalAmount(newTotalAmount);

// //     setItems(newItems);
// //   };

// //   const addItem = () => {
// //     setItems([...items, { product: '', quantity: 1, price: 0.0 }]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage('');

// //     if (!user) {
// //       console.error('User name is required.');
// //       setMessage('User name is required.');
// //       return;
// //     }

// //     for (let item of items) {
// //       if (!item.product || item.quantity <= 0 || item.price <= 0) {
// //         console.error('All fields are required and must be valid.');
// //         setMessage('All fields are required and must be valid.');
// //         return;
// //       }
// //     }

// //     try {
// //       const order = { user, items, totalAmount };
// //       const response = await fetch(`http://localhost:5000/api/userRoutes/order/${items.product}/${items.price}`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(order)
// //       });
// //       if (!response.ok) {
// //         throw new Error('Failed to place order');
// //       }
// //       const data = await response.json();
// //       setMessage(data.message);
// //       navigate('/');
// //     } catch (error) {
// //       console.error('Failed to place order:', error.message);
// //       setMessage('Failed to place order');
// //     }
// //   };

// //   // Styles for the container
// //   const containerStyle = {
// //     backgroundColor: 'black',
// //     borderRadius: '15px',
// //     boxShadow: '0 0 20px aqua',
// //     padding: '20px',
// //     width: '800px',
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
// //     marginBottom: '15px',
// //     width: '130px',
// //     height: '44px',
// //     cursor: 'pointer',
// //     fontSize: '22px',
// //     marginLeft: '300px'
// //   };

// //   return (
// //     <div className="container mt-3" style={containerStyle}>
// //       <h2 className="my-3" style={{ color: "aqua", textAlign: "center" }}>Place an Order</h2>
// //       <form onSubmit={handleSubmit} className="needs-validation" noValidate>
// //         <div className="form-group mb-3">
// //           <label htmlFor="userName">User Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="userName"
// //             value={user}
// //             onChange={(e) => setUser(e.target.value)}
// //             required
// //           />
// //         </div>
// //         {items.map((item, index) => (

// //           <div className="form-group mb-3" key={index} style={{ display: 'flex', alignItems: 'center' }}>
// //             <label style={{ flex: '1' }}>Product:</label>
// //             <select className="form-control" style={{ flex: '3' }} value={item.product} onChange={(e) => handleItemSelection(index, e)}>
// //               <option  value="" style={{backgroundColor:"black", color:"white"}}>Select an item</option>
// //               {menuItems.map(menuItem => (
// //                 <option key={menuItem.id} value={menuItem.name} style={{backgroundColor:"gray", color:"white"}} >
// //                   {menuItem.name} - Rs {menuItem.price.toFixed(2)}
// //                 </option>
// //               ))}
// //             </select>

// //             <label style={{ flex: '1', marginLeft: '10px' }}>Quantity:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '1' }}
// //               value={item.quantity}
// //               onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
// //               required
// //               min="1"
// //             />

// //             <label style={{ flex: '1', marginLeft: '10px' }}>Price:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '2' }}
// //               value={item.price * item.quantity}
// //               readOnly
// //             />
// //           </div>

// //         ))}
// //         <button type="button" className="btn btn-secondary mb-3" onClick={addItem}>Add Item</button>
// //         <div className="form-group mb-3">
// //           <label>Total Amount: </label>
// //           <span className="form-control" style={{ backgroundColor: '#e9ecef' }}>{`Rs ${totalAmount.toFixed(2)}`}</span>
// //         </div>
// //         <button
// //           type="submit"
// //           className="btn btn-primary"
// //           style={buttonStyle}
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //         >
// //           Order
// //         </button>
// //         {message && <p className="text-danger" style={{ color: 'red' }}>{message}</p>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Order;
// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';

// // const Order = () => {
// //   const { foodName, price } = useParams();
// //   const [menuItems, setMenuItems] = useState([]);
// //   const [user, setUser] = useState('');
// //   const [mobile, setMobile] = useState('');
// //   const [items, setItems] = useState([{ product: foodName || '', quantity: 1, price: parseFloat(price) || 0.0 }]);
// //   const [totalAmount, setTotalAmount] = useState(parseFloat(price) || 0.0);
// //   const [paymentMethod, setPaymentMethod] = useState('COD'); // State for payment method
// //   const [message, setMessage] = useState('');
// //   const [isHovered, setIsHovered] = useState(false);
// //   let navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchMenuItems = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/menuRoutes/');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch menu items');
// //         }
// //         const data = await response.json();
// //         const fetchedItems = data.menuItems.map(item => ({
// //           ...item,
// //           price: parseFloat(item.price)
// //         }));
// //         setMenuItems(fetchedItems);
// //       } catch (error) {
// //         console.error('Failed to fetch menu items:', error.message);
// //       }
// //     };

// //     const fetchUserName = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/userRoutes/getUserName');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch user name');
// //         }
// //         const data = await response.json();
// //         setUser(data.userName);
// //       } catch (error) {
// //         console.error('Failed to fetch user name:', error.message);
// //       }
// //     };

// //     fetchMenuItems();
// //     fetchUserName();
// //   }, []);

// //   const handleItemSelection = (index, e) => {
// //     const selectedItem = menuItems.find(item => item.name === e.target.value);
// //     if (selectedItem) {
// //       const newItems = [...items];
// //       newItems[index] = { product: selectedItem.name, quantity: 1, price: selectedItem.price };
// //       setItems(newItems);

// //       const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //       setTotalAmount(newTotalAmount);
// //     }
// //   };

// //   const handleChange = (index, field, value) => {
// //     const newItems = [...items];
// //     newItems[index][field] = field === 'quantity' ? parseInt(value) : value;

// //     const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //     setTotalAmount(newTotalAmount);

// //     setItems(newItems);
// //   };

// //   const addItem = () => {
// //     setItems([...items, { product: '', quantity: 1, price: 0.0 }]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage('');

// //     if (!user) {
// //       console.error('User name is required.');
// //       setMessage('User name is required.');
// //       return;
// //     }

// //     if (!mobile) {
// //       console.error('Mobile number is required.');
// //       setMessage('Mobile number is required.');
// //       return;
// //     }

// //     for (let item of items) {
// //       if (!item.product || item.quantity <= 0 || item.price <= 0) {
// //         console.error('All fields are required and must be valid.');
// //         setMessage('All fields are required and must be valid.');
// //         return;
// //       }
// //     }

// //     try {
// //       const order = { user, mobile, items, totalAmount, paymentMethod };
// //       const response = await fetch(`http://localhost:5000/api/userRoutes/order`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(order)
// //       });
// //       if (!response.ok) {
// //         throw new Error('Failed to place order');
// //       }
// //       const data = await response.json();
// //       setMessage(data.message);

// //       if (paymentMethod === 'Online') {
// //         // Simulate online payment processing
// //         alert('Redirecting to payment gateway...');
// //         setTimeout(() => {
// //           alert('Payment successful!');
// //           navigate('/');
// //         }, 2000);
// //       } else {
// //         navigate('/');
// //       }
// //     } catch (error) {
// //       console.error('Failed to place order:', error.message);
// //       setMessage('Failed to place order');
// //     }
// //   };

// //   const containerStyle = {
// //     backgroundColor: 'black',
// //     borderRadius: '15px',
// //     boxShadow: '0 0 20px aqua',
// //     padding: '20px',
// //     width: '800px',
// //     color: 'white',
// //     marginTop: '3rem',
// //   };

// //   const buttonStyle = {
// //     backgroundColor: isHovered ? 'black' : 'aqua',
// //     color: isHovered ? 'white' : 'black',
// //     border: isHovered ? '3px solid aqua' : 'none',
// //     borderRadius: '25px',
// //     marginTop: '7px',
// //     marginBottom: '15px',
// //     width: '130px',
// //     height: '44px',
// //     cursor: 'pointer',
// //     fontSize: '22px',
// //     marginLeft: '300px'
// //   };

// //   return (
// //     <div className="container mt-3" style={containerStyle}>
// //       <h2 className="my-3" style={{ color: "aqua", textAlign: "center" }}>Place an Order</h2>
// //       <form onSubmit={handleSubmit} className="needs-validation" noValidate>
// //         <div className="form-group mb-3">
// //           <label htmlFor="userName">User Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="userName"
// //             value={user}
// //             onChange={(e) => setUser(e.target.value)}
// //             required
// //           />
// //         </div>

// //         {items.map((item, index) => (
// //           <div className="form-group mb-3" key={index} style={{ display: 'flex', alignItems: 'center' }}>
// //             <label style={{ flex: '1' }}>Product:</label>
// //             <select className="form-control" style={{ flex: '3' }} value={item.product} onChange={(e) => handleItemSelection(index, e)}>
// //               {/* <option value="" style={{backgroundColor:"black", color:"white"}}>Select an item</option>
// //               {menuItems.map(menuItem => (
// //                 <option key={menuItem.id} value={menuItem.name} style={{backgroundColor:"gray", color:"white"}} >
// //                   {menuItem.name} - Rs {menuItem.price.toFixed(2)}
// //                 </option>
// //               ))}
// //             </select> */}
// //               <option key="default" value="" style={{ backgroundColor: "black", color: "white" }}>Select an item</option>
// //               {menuItems.map(menuItem => (
// //                 <option key={menuItem.id} value={menuItem.name} style={{ backgroundColor: "gray", color: "white" }}>
// //                   {menuItem.name} - Rs {menuItem.price.toFixed(2)}
// //                 </option>
// //               ))}
// //             </select>
// //             <label style={{ flex: '1', marginLeft: '10px' }}>Quantity:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '1' }}
// //               value={item.quantity}
// //               onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
// //               required
// //               min="1"
// //             />
// //             <label style={{ flex: '1', marginLeft: '10px' }}>Price:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '2' }}
// //               value={item.price * item.quantity}
// //               readOnly
// //             />
// //           </div>
// //         ))}
// //         <button type="button" className="btn btn-secondary mb-3" onClick={addItem}>Add Item</button>
// //         <div className="form-group mb-3">
// //           <label>Total Amount: </label>
// //           <span className="form-control" style={{ backgroundColor: '#e9ecef' }}>{`Rs ${totalAmount.toFixed(2)}`}</span>
// //         </div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="mobile">Mobile Number:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="mobile"
// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';

// // const Order = () => {
// //   const { foodName, price } = useParams();
// //   const [menuItems, setMenuItems] = useState([]);
// //   const [user, setUser] = useState('');
// //   const [mobile, setMobile] = useState('');
// //   const [items, setItems] = useState([{ product: foodName || '', quantity: 1, price: parseFloat(price) || 0.0 }]);
// //   const [totalAmount, setTotalAmount] = useState(parseFloat(price) || 0.0);
// //   const [paymentMethod, setPaymentMethod] = useState('COD'); // State for payment method
// //   const [message, setMessage] = useState('');
// //   const [isHovered, setIsHovered] = useState(false);
// //   let navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch menu items from API
// //     const fetchMenuItems = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/menuRoutes/');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch menu items');
// //         }
// //         const data = await response.json();
// //         const fetchedItems = data.menuItems.map(item => ({
// //           ...item,
// //           price: parseFloat(item.price)
// //         }));
// //         setMenuItems(fetchedItems);
// //       } catch (error) {
// //         console.error('Failed to fetch menu items:', error.message);
// //       }
// //     };

// //     // Fetch user name from API
// //     const fetchUserName = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/userRoutes/getUserName');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch user name');
// //         }
// //         const data = await response.json();
// //         setUser(data.userName);
// //       } catch (error) {
// //         console.error('Failed to fetch user name:', error.message);
// //       }
// //     };

// //     fetchMenuItems();
// //     fetchUserName();
// //   }, []);

// //   // Update selected item details
// //   const handleItemSelection = (index, e) => {
// //     const selectedItem = menuItems.find(item => item.name === e.target.value);
// //     if (selectedItem) {
// //       const newItems = [...items];
// //       newItems[index] = { product: selectedItem.name, quantity: 1, price: selectedItem.price };
// //       setItems(newItems);

// //       const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //       setTotalAmount(newTotalAmount);
// //     }
// //   };

// //   // Update quantity or other fields
// //   const handleChange = (index, field, value) => {
// //     const newItems = [...items];
// //     newItems[index][field] = field === 'quantity' ? parseInt(value) : value;

// //     const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //     setTotalAmount(newTotalAmount);

// //     setItems(newItems);
// //   };

// //   // Add a new item row
// //   const addItem = () => {
// //     setItems([...items, { product: '', quantity: 1, price: 0.0 }]);
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage('');

// //     if (!user) {
// //       console.error('User name is required.');
// //       setMessage('User name is required.');
// //       return;
// //     }

// //     if (!mobile) {
// //       console.error('Mobile number is required.');
// //       setMessage('Mobile number is required.');
// //       return;
// //     }

// //     for (let item of items) {
// //       if (!item.product || item.quantity <= 0 || item.price <= 0) {
// //         console.error('All fields are required and must be valid.');
// //         setMessage('All fields are required and must be valid.');
// //         return;
// //       }
// //     }

// //     try {
// //       const order = { user, mobile, items, totalAmount, paymentMethod };
// //       const response = await fetch('http://localhost:5000/api/userRoutes/order', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(order)
// //       });
// //       if (!response.ok) {
// //         throw new Error('Failed to place order');
// //       }
// //       const data = await response.json();
// //       setMessage(data.message);

// //       if (paymentMethod === 'Online') {
// //         // Simulate online payment processing
// //         alert('Redirecting to payment gateway...');
// //         setTimeout(() => {
// //           alert('Payment successful!');
// //           navigate('/');
// //         }, 2000);
// //       } else {
// //         navigate('/');
// //       }
// //     } catch (error) {
// //       console.error('Failed to place order:', error.message);
// //       setMessage('Failed to place order');
// //     }
// //   };

// //   // Styles for container and button
// //   const containerStyle = {
// //     backgroundColor: 'black',
// //     borderRadius: '15px',
// //     boxShadow: '0 0 20px aqua',
// //     padding: '20px',
// //     width: '800px',
// //     color: 'white',
// //     marginTop: '3rem',
// //   };

// //   const buttonStyle = {
// //     backgroundColor: isHovered ? 'black' : 'aqua',
// //     color: isHovered ? 'white' : 'black',
// //     border: isHovered ? '3px solid aqua' : 'none',
// //     borderRadius: '25px',
// //     marginTop: '7px',
// //     marginBottom: '15px',
// //     width: '130px',
// //     height: '44px',
// //     cursor: 'pointer',
// //     fontSize: '22px',
// //     marginLeft: '300px'
// //   };

// //   return (
// //     <div className="container mt-3" style={containerStyle}>
// //       <h2 className="my-3" style={{ color: "aqua", textAlign: "center" }}>Place an Order</h2>
// //       <form onSubmit={handleSubmit} className="needs-validation" noValidate>
// //         <div className="form-group mb-3">
// //           <label htmlFor="userName">User Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="userName"
// //             value={user}
// //             onChange={(e) => setUser(e.target.value)}
// //             required
// //           />
// //         </div>

// //         {items.map((item, index) => (
// //           <div className="form-group mb-3" key={index} style={{ display: 'flex', alignItems: 'center' }}>
// //             <label style={{ flex: '1' }}>Product:</label>
// //             <select
// //               className="form-control"
// //               style={{ flex: '3' }}
// //               value={item.product}
// //               onChange={(e) => handleItemSelection(index, e)}
// //             >
// //               <option key="default" value="" style={{ backgroundColor: "black", color: "white" }}>Select an item</option>
// //               {menuItems.map(menuItem => (
// //                 <option key={menuItem.id} value={menuItem.name} style={{ backgroundColor: "gray", color: "white" }}>
// //                   {menuItem.name} - Rs {menuItem.price.toFixed(2)}
// //                 </option>
// //               ))}
// //             </select>
// //             <label style={{ flex: '1', marginLeft: '10px' }}>Quantity:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '1' }}
// //               value={item.quantity}
// //               onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
// //               required
// //               min="1"
// //             />
// //             <label style={{ flex: '1', marginLeft: '10px' }}>Price:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '2' }}
// //               value={item.price * item.quantity}
// //               readOnly
// //             />
// //           </div>
// //         ))}
// //         <button type="button" className="btn btn-secondary mb-3" onClick={addItem}>Add Item</button>
// //         <div className="form-group mb-3">
// //           <label>Total Amount: </label>
// //           <span className="form-control" style={{ backgroundColor: '#e9ecef' }}>{`Rs ${totalAmount.toFixed(2)}`}</span>
// //         </div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="mobile">Mobile Number:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="mobile"
// //             value={mobile}
// //             onChange={(e) => setMobile(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group mb-3">
// //           <label>Payment Method:</label>
// //           <div>
// //             <label className="form-check-label" style={{ marginRight: '10px' }}>
// //               <input
// //                 type="radio"
// //                 className="form-check-input"
// //                 name="paymentMethod"
// //                 value="COD"
// //                 checked={paymentMethod === 'COD'}
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //               />
// //               Cash on Delivery
// //             </label>
// //             <label className="form-check-label">
// //               <input
// //                 type="radio"
// //                 className="form-check-input"
// //                 name="paymentMethod"
// //                 value="Online"
// //                 checked={paymentMethod === 'Online'}
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //               />
// //               Online Payment
// //             </label>
// //           </div>
// //         </div>
// //         <button
// //           type="submit"
// //           className="btn btn-primary"
// //           style={buttonStyle}
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //         >
// //           Order
// //         </button>
// //         {message && <p className="text-danger" style={{ color: 'green' }}>{message}</p>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Order;


// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';

// // const Order = () => {
// //   const { foodName, price } = useParams();
// //   const [menuItems, setMenuItems] = useState([]);
// //   const [user, setUser] = useState('');
// //   const [mobile, setMobile] = useState('');
// //   const [items, setItems] = useState([{ product: foodName || '', quantity: 1, price: parseFloat(price) || 0.0 }]);
// //   const [totalAmount, setTotalAmount] = useState(parseFloat(price) || 0.0);
// //   const [paymentMethod, setPaymentMethod] = useState('COD'); // State for payment method
// //   const [message, setMessage] = useState('');
// //   const [isHovered, setIsHovered] = useState(false);
// //   let navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch menu items from API
// //     const fetchMenuItems = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/menuRoutes/');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch menu items');
// //         }
// //         const data = await response.json();
// //         const fetchedItems = data.menuItems.map(item => ({
// //           ...item,
// //           price: parseFloat(item.price)
// //         }));
// //         setMenuItems(fetchedItems);
// //       } catch (error) {
// //         console.error('Failed to fetch menu items:', error.message);
// //       }
// //     };

// //     // Fetch user name from API
// //     const fetchUserName = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/userRoutes/getUserName');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch user name');
// //         }
// //         const data = await response.json();
// //         setUser(data.userName);
// //       } catch (error) {
// //         console.error('Failed to fetch user name:', error.message);
// //       }
// //     };

// //     fetchMenuItems();
// //     fetchUserName();
// //   }, []);

// //   // Update selected item details
// //   const handleItemSelection = (index, e) => {
// //     const selectedItem = menuItems.find(item => item.name === e.target.value);
// //     if (selectedItem) {
// //       const newItems = [...items];
// //       newItems[index] = { product: selectedItem.name, quantity: 1, price: selectedItem.price };
// //       setItems(newItems);

// //       const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //       setTotalAmount(newTotalAmount);
// //     }
// //   };

// //   // Update quantity or other fields
// //   const handleChange = (index, field, value) => {
// //     const newItems = [...items];
// //     newItems[index][field] = field === 'quantity' ? parseInt(value) : value;

// //     const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
// //     setTotalAmount(newTotalAmount);

// //     setItems(newItems);
// //   };

// //   // Add a new item row
// //   const addItem = () => {
// //     setItems([...items, { product: '', quantity: 1, price: 0.0 }]);
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage('');

// //     if (!user) {
// //       console.error('User name is required.');
// //       setMessage('User name is required.');
// //       return;
// //     }

// //     if (!mobile) {
// //       console.error('Mobile number is required.');
// //       setMessage('Mobile number is required.');
// //       return;
// //     }

// //     for (let item of items) {
// //       if (!item.product || item.quantity <= 0 || item.price <= 0) {
// //         console.error('All fields are required and must be valid.');
// //         setMessage('All fields are required and must be valid.');
// //         return;
// //       }
// //     }

// //     try {
// //       const order = { user, mobile, items, totalAmount, paymentMethod };
// //       const response = await fetch('http://localhost:5000/api/userRoutes/order', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(order)
// //       });
// //       if (!response.ok) {
// //         throw new Error('Failed to place order');
// //       }
// //       const data = await response.json();
// //       setMessage(data.message);

// //       if (paymentMethod === 'Online') {
// //         // Simulate online payment processing
// //         alert('Redirecting to payment gateway...');
// //         setTimeout(() => {
// //           alert('Payment successful!');
// //           navigate('/');
// //         }, 2000);
// //       } else {
// //         navigate('/');
// //       }
// //     } catch (error) {
// //       console.error('Failed to place order:', error.message);
// //       setMessage('Failed to place order');
// //     }
// //   };

// //   // Styles for container and button
// //   const containerStyle = {
// //     backgroundColor: 'black',
// //     borderRadius: '15px',
// //     boxShadow: '0 0 20px aqua',
// //     padding: '20px',
// //     width: '800px',
// //     color: 'white',
// //     marginTop: '3rem',
// //   };

// //   const buttonStyle = {
// //     backgroundColor: isHovered ? 'black' : 'aqua',
// //     color: isHovered ? 'white' : 'black',
// //     border: isHovered ? '3px solid aqua' : 'none',
// //     borderRadius: '25px',
// //     marginTop: '7px',
// //     marginBottom: '15px',
// //     width: '130px',
// //     height: '44px',
// //     cursor: 'pointer',
// //     fontSize: '22px',
// //     marginLeft: '300px'
// //   };

// //   return (
// //     <div className="container mt-3" style={containerStyle}>
// //       <h2 className="my-3" style={{ color: "aqua", textAlign: "center" }}>Place an Order</h2>
// //       <form onSubmit={handleSubmit} className="needs-validation" noValidate>
// //         <div className="form-group mb-3">
// //           <label htmlFor="userName">User Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="userName"
// //             value={user}
// //             onChange={(e) => setUser(e.target.value)}
// //             required
// //           />
// //         </div>

// //         {items.map((item, index) => (
// //           <div className="form-group mb-3" key={index} style={{ display: 'flex', alignItems: 'center' }}>
// //             <label style={{ flex: '1' }}>Product:</label>
// //             <select
// //               className="form-control"
// //               style={{ flex: '3' }}
// //               value={item.product}
// //               onChange={(e) => handleItemSelection(index, e)}
// //             >
// //               <option key="default" value="" style={{ backgroundColor: "black", color: "white" }}>Select an item</option>
// //               {menuItems.map(menuItem => (
// //                 <option key={menuItem.id} value={menuItem.name} style={{ backgroundColor: "gray", color: "white" }}>
// //                   {menuItem.name} - Rs {menuItem.price.toFixed(2)}
// //                 </option>
// //               ))}
// //             </select>
// //             <label style={{ flex: '1', marginLeft: '10px' }}>Quantity:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '1' }}
// //               value={item.quantity}
// //               onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
// //               required
// //               min="1"
// //             />
// //             <label style={{ flex: '1', marginLeft: '10px' }}>Price:</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               style={{ flex: '2' }}
// //               value={item.price * item.quantity}
// //               readOnly
// //             />
// //           </div>
// //         ))}
// //         <button type="button" className="btn btn-secondary mb-3" onClick={addItem}>Add Item</button>
// //         <div className="form-group mb-3">
// //           <label>Total Amount: </label>
// //           <span className="form-control" style={{ backgroundColor: '#e9ecef' }}>{`Rs ${totalAmount.toFixed(2)}`}</span>
// //         </div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="mobile">Mobile Number:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="mobile"
// //             value={mobile}
// //             onChange={(e) => setMobile(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group mb-3">
// //           <label>Payment Method:</label>
// //           <div>
// //             <label className="radio-inline me-2">
// //               <input
// //                 type="radio"
// //                 name="paymentMethod"
// //                 value="COD"
// //                 checked={paymentMethod === 'COD'}
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //               />
// //               Cash on Delivery
// //             </label>
// //             <label className="radio-inline">
// //               <input
// //                 type="radio"
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Order = () => {
//   const { foodName, price } = useParams();
//   const [menuItems, setMenuItems] = useState([]);
//   const [user, setUser] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [items, setItems] = useState([{ product: foodName || '', quantity: 1, price: parseFloat(price) || 0.0 }]);
//   const [totalAmount, setTotalAmount] = useState(parseFloat(price) || 0.0);
//   const [paymentMethod, setPaymentMethod] = useState('COD');
//   const [message, setMessage] = useState('');
//   const [isHovered, setIsHovered] = useState(false);
//   let navigate = useNavigate();

//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/menuRoutes/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch menu items');
//         }
//         const data = await response.json();
//         const fetchedItems = data.menuItems.map(item => ({
//           ...item,
//           price: parseFloat(item.price)
//         }));
//         setMenuItems(fetchedItems);
//       } catch (error) {
//         console.error('Failed to fetch menu items:', error.message);
//       }
//     };

//     const fetchUserName = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/userRoutes/getUserName');
//         if (!response.ok) {
//           throw new Error('Failed to fetch user name');
//         }
//         const data = await response.json();
//         setUser(data.userName);
//       } catch (error) {
//         console.error('Failed to fetch user name:', error.message);
//       }
//     };

//     fetchMenuItems();
//     fetchUserName();
//   }, []);

//   const handleItemSelection = (index, e) => {
//     const selectedItem = menuItems.find(item => item.name === e.target.value);
//     if (selectedItem) {
//       const newItems = [...items];
//       newItems[index] = { product: selectedItem.name, quantity: 1, price: selectedItem.price };
//       setItems(newItems);

//       const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
//       setTotalAmount(newTotalAmount);
//     }
//   };

//   const handleChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = field === 'quantity' ? parseInt(value) : value;

//     const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
//     setTotalAmount(newTotalAmount);

//     setItems(newItems);
//   };

//   const addItem = () => {
//     setItems([...items, { product: '', quantity: 1, price: 0.0 }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if (!user) {
//       console.error('User name is required.');
//       setMessage('User name is required.');
//       return;
//     }

//     if (!mobile) {
//       console.error('Mobile number is required.');
//       setMessage('Mobile number is required.');
//       return;
//     }

//     for (let item of items) {
//       if (!item.product || item.quantity <= 0 || item.price <= 0) {
//         console.error('All fields are required and must be valid.');
//         setMessage('All fields are required and must be valid.');
//         return;
//       }
//     }

//     try {
//       const order = { user, mobile, items, totalAmount, paymentMethod };
//       const response = await fetch('http://localhost:5000/api/userRoutes/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(order)
//       });
//       if (!response.ok) {
//         throw new Error('Failed to place order');
//       }
//       const data = await response.json();
//       setMessage(data.message);

//       if (paymentMethod === 'Online') {
//         alert('Redirecting to payment gateway...');
//         setTimeout(() => {
//           alert('Payment successful!');
//           navigate('/');
//         }, 2000);
//       } else {
//         navigate('/');
//       }
//     } catch (error) {
//       console.error('Failed to place order:', error.message);
//       setMessage('Failed to place order');
//     }
//   };

//   const containerStyle = {
//     backgroundColor: 'black',
//     borderRadius: '15px',
//     boxShadow: '0 0 20px aqua',
//     padding: '20px',
//     width: '800px',
//     color: 'white',
//     marginTop: '3rem',
//   };

//   const buttonStyle = {
//     backgroundColor: isHovered ? 'black' : 'aqua',
//     color: isHovered ? 'white' : 'black',
//     border: isHovered ? '3px solid aqua' : 'none',
//     borderRadius: '25px',
//     marginTop: '7px',
//     marginBottom: '15px',
//     width: '180px',
//     height: '44px',
//     cursor: 'pointer',
//     fontSize: '22px',
//     marginLeft: '300px'
//   };

//   return (
//     <div className="container mt-3" style={containerStyle}>
//       <h2 className="my-3" style={{ color: "aqua", textAlign: "center" }}>Place an Order</h2>
//       <form onSubmit={handleSubmit} className="needs-validation" noValidate>
//         <div className="form-group mb-3">
//           <label htmlFor="userName">User Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="userName"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//             required
//           />
//         </div>

//         {items.map((item, index) => (
//           <div className="form-group mb-3" key={index} style={{ display: 'flex', alignItems: 'center' }}>
//             <label style={{ flex: '1' }}>Product:</label>
//             <select
//               className="form-control"
//               style={{ flex: '3' }}
//               value={item.product}
//               onChange={(e) => handleItemSelection(index, e)}
//             >
//               <option key="default" value="" style={{ backgroundColor: "black", color: "white" }}>Select an item</option>
//               {menuItems.map((menuItem, menuIndex) => (
//                 <option key={menuItem.id || menuIndex} value={menuItem.name} style={{ backgroundColor: "gray", color: "white" }}>
//                   {menuItem.name} - Rs {menuItem.price.toFixed(2)}
//                 </option>
//               ))}
//             </select>
//             <label style={{ flex: '1', marginLeft: '10px' }}>Quantity:</label>
//             <input
//               type="number"
//               className="form-control"
//               style={{ flex: '1' }}
//               value={item.quantity}
//               onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
//               required
//               min="1"
//             />
//             <label style={{ flex: '1', marginLeft: '10px' }}>Price:</label>
//             <input
//               type="number"
//               className="form-control"
//               style={{ flex: '2' }}
//               value={item.price * item.quantity}
//               readOnly
//             />
//           </div>
//         ))}
//         <button type="button" className="btn btn-secondary mb-3" onClick={addItem}>Add Item</button>
//         <div className="form-group mb-3">
//           <label>Total Amount: </label>
//           <span className="form-control" style={{ backgroundColor: '#e9ecef' }}>{`Rs ${totalAmount.toFixed(2)}`}</span>
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="mobile">Mobile Number:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label>Payment Method:</label>
//           <div>
//             <label className="radio-inline me-2">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="COD"
//                 checked={paymentMethod === 'COD'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Cash on Delivery
//             </label>
//             <label className="radio-inline">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Online"
//                 checked={paymentMethod === 'Online'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Online Payment
//             </label>
//           </div>
//         </div>
//         {message && <div className="alert alert-warning">{message}</div>}
//         <button
//           type="submit"
//           className="btn"
//           style={buttonStyle}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Order;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Order = () => {
  const { foodName, price } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [user, setUser] = useState('');
  const [mobile, setMobile] = useState('');
  const [items, setItems] = useState([{ product: foodName || '', quantity: 1, price: parseFloat(price) || 0.0 }]);
  const [totalAmount, setTotalAmount] = useState(parseFloat(price) || 0.0);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menuRoutes/');
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        const fetchedItems = data.menuItems.map(item => ({
          ...item,
          price: parseFloat(item.price)
        }));
        setMenuItems(fetchedItems);
      } catch (error) {
        console.error('Failed to fetch menu items:', error.message);
      }
    };

    const fetchUserName = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/userRoutes/getUserName');
        if (!response.ok) {
          throw new Error('Failed to fetch user name');
        }
        const data = await response.json();
        setUser(data.userName);
      } catch (error) {
        console.error('Failed to fetch user name:', error.message);
      }
    };

    fetchMenuItems();
    fetchUserName();
  }, []);

  const handleItemSelection = (index, e) => {
    const selectedItem = menuItems.find(item => item.name === e.target.value);
    if (selectedItem) {
      const newItems = [...items];
      newItems[index] = { product: selectedItem.name, quantity: 1, price: selectedItem.price };
      setItems(newItems);

      const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
      setTotalAmount(newTotalAmount);
    }
  };

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === 'quantity' ? parseInt(value) : value;

    const newTotalAmount = newItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setTotalAmount(newTotalAmount);

    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { product: '', quantity: 1, price: 0.0 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!user) {
      console.error('User name is required.');
      setMessage('User name is required.');
      return;
    }

    if (!mobile) {
      console.error('Mobile number is required.');
      setMessage('Mobile number is required.');
      return;
    }

    for (let item of items) {
      if (!item.product || item.quantity <= 0 || item.price <= 0) {
        console.error('All fields are required and must be valid.');
        setMessage('All fields are required and must be valid.');
        return;
      }
    }

    try {
      const order = { user, mobile, items, totalAmount, paymentMethod };
      const response = await fetch('http://localhost:5000/api/userRoutes/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
      const data = await response.json();
      setMessage(data.message);

      if (paymentMethod === 'Online') {
        alert('Redirecting to payment gateway...');
        setTimeout(() => {
          alert('Payment successful!');
          navigate('/');
        }, 2000);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to place order:', error.message);
      setMessage('Failed to place order');
    }
  };

  return (
    <div className="container mt-3" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#000', color: '#fff', borderRadius: '15px', boxShadow: '0 0 20px aqua' }}>
      <h2 className="my-3 text-center" style={{ color: "aqua" }}>Place an Order</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-group mb-3">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>

        {items.map((item, index) => (
          <div className="form-group mb-3 row" key={index}>
            <div className="col-12 col-md-4 mb-2 mb-md-0">
              <label>Product:</label>
              <select
                className="form-control"
                value={item.product}
                onChange={(e) => handleItemSelection(index, e)}
              >
                <option key="default" value="">Select an item</option>
                {menuItems.map((menuItem, menuIndex) => (
                  <option key={menuItem.id || menuIndex} value={menuItem.name}>
                    {menuItem.name} - Rs {menuItem.price.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6 col-md-2">
              <label>Quantity:</label>
              <input
                type="number"
                className="form-control"
                value={item.quantity}
                onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
                required
                min="1"
              />
            </div>
            <div className="col-6 col-md-3">
              <label>Price:</label>
              <input
                type="number"
                className="form-control"
                value={item.price * item.quantity}
                readOnly
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary mb-3" onClick={addItem}>Add Item</button>
        <div className="form-group mb-3">
          <label>Total Amount: </label>
          <span className="form-control" style={{ backgroundColor: '#e9ecef' }}>{`Rs ${totalAmount.toFixed(2)}`}</span>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Payment Method:</label>
          <div>
            <label className="radio-inline me-2">
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="paymentMethod"
                value="Online"
                checked={paymentMethod === 'Online'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Online Payment
            </label>
          </div>
        </div>
        {message && <div className="alert alert-warning">{message}</div>}
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: isHovered ? 'black' : 'aqua',
            color: isHovered ? 'white' : 'black',
            border: isHovered ? '3px solid aqua' : 'none',
            borderRadius: '25px',
            marginTop: '7px',
            marginBottom: '15px',
            width: '180px',
            height: '44px',
            cursor: 'pointer',
            fontSize: '22px',
            display: 'block',
            margin: '0 auto'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order;
