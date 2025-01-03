import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const AdminOrders = () => { 
  const [orders, setOrders] = useState([]);
  useEffect(() => { 
    const fetchOrders = async () => { 
      try { const response = await axios.get(`${BASE_URL}/api/orders`); 
        setOrders(response.data);
      } catch (error) { 
        console.error('Error fetching orders:', error); 
      } 
    }; 
    
    fetchOrders(); 
  }, []); 
  
  const updateOrderStatus = async (orderId, status) => { 
    try { 
      await axios.put(`${BASE_URL}/api/orders/${orderId}`, { status }); 
      setOrders((prevOrders) => 
        prevOrders.map((order) => 
          order._id === orderId ? { ...order, status } : order 
    ) 
  ); 
  } catch (error) { 
    console.error('Error updating order status:', error); 
  } 
}; 

return ( 
  <div> 
    <h1>Manage Orders</h1> 
    <ul> 
      {orders.map((order) => ( 
        <li key={order._id}> 
        <h2>Order ID: {order._id}</h2> 
        <p>Status: {order.status}</p> 
        <button onClick={() => updateOrderStatus(order._id, 'Shipped')}>Mark as Shipped</button> 
        </li> 
      ))} 
    </ul> 
  </div> 
  ); 
}; 


export default AdminOrders;