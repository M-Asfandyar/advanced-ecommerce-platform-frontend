import axios from 'axios'; 
const BASE_URL = 'http://localhost:4000/api/orders'; 

// Create an order
 export const createOrder = async (userId, address) => { 
  const response = await axios.post(`${BASE_URL}/${userId}`, { address }); 
  return response.data; 
};