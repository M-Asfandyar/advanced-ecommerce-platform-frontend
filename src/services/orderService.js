import axios from 'axios'; 
const BASE_URL = process.env.REACT_APP_BACKEND_URL;  

// Create an order
 export const createOrder = async (userId, address) => { 
  const response = await axios.post(`${BASE_URL}/api/orders/${userId}`, { address }); 
  return response.data; 
};