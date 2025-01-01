import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

const UserDashboard = ({ userId }) => { 
  const [profile, setProfile] = useState({ name: '', email: '', addresses: [] }); 
  const [orders, setOrders] = useState([]); 
  
  useEffect(() => { 
    const fetchUserData = async () => { 
      try { 
        const profileResponse = await axios.get(`http://localhost:4000/api/users/${userId}`); 
        setProfile(profileResponse.data); 
        
        const ordersResponse = await axios.get(`http://localhost:4000/api/orders/${userId}`); 
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
      </div> 
      ); 
    }; 
    
    
    export default UserDashboard;