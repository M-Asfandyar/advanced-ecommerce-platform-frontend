import axios from 'axios'; 

const BASE_URL = process.env.REACT_APP_BACKEND_URL;  

// Fetch the user's cart 
export const fetchCart = async (userId) => { 
  const response = await axios.get(`${BASE_URL}/api/carts/${userId}`); 
  return response.data;
 }; 

// Add an item to the cart
 export const addToCart = async (userId, productId, quantity) => { 
  const response = await axios.post(`${BASE_URL}/api/carts/${userId}`, { productId, quantity, }); 
  return response.data; 
}; 
 
 // Remove an item from the cart
  export const removeFromCart = async (userId, productId) => { 
    const response = await axios.delete(`${BASE_URL}/api/carts/${userId}/${productId}`);
    return response.data; 
  };