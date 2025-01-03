import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recommendations from '../components/Recommendations';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const UserDashboard = ({ userId }) => {
  const [profile, setProfile] = useState({ name: '', email: '', addresses: [] });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const profileResponse = await axios.get(`${BASE_URL}/api/users/${userId}`);
        setProfile(profileResponse.data);

        const ordersResponse = await axios.get(`${BASE_URL}/api/orders/${userId}`);
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h1>Welcome, {profile.name}</h1>
      <p>Email: {profile.email}</p>
      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id}, Total: ${order.total}, Status: {order.status}
          </li>
        ))}
      </ul>
      <h2>Recommended for You</h2>
      <Recommendations userId={userId} />
    </div>
  );
};

export default UserDashboard;