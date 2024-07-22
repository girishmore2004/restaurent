import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/userRoutes/user-details', {
          method: 'GET',
          headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Error fetching data: ${text}`);
        }

        const data = await response.json();
        setUserData(data.user);
        setProfilePhoto(data.user.profilePhoto);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('photo', file);

        const token = localStorage.getItem('token');
        const response = await fetch('/api/userRoutes/uploadPhoto', {
          method: 'POST',
          headers: {
            'x-auth-token': token
          },
          body: formData
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Error uploading photo: ${text}`);
        }

        const data = await response.json();
        setProfilePhoto(data.photoUrl);
      } catch (error) {
        console.error('Error uploading photo:', error);
        setError(error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Profile</div>

            <div className="card-body">
              {error && <p className="text-danger">{error}</p>}
              {userData && (
                <div>
                  <h2>Welcome, {userData.name}!</h2>
                  <p>Email: {userData.email}</p>
                  <h3>Order History</h3>
                  <ul>
                    {userData.orders.map((order) => (
                      <li key={order._id}>
                        Order ID: {order._id}, Amount: {order.totalAmount}, Date: {new Date(order.date).toLocaleDateString()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4">
                <h3>Profile Photo</h3>
                <input type="file" onChange={handlePhotoUpload} />
                {profilePhoto && <img src={profilePhoto} alt="Profile" className="img-fluid rounded mt-2" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
