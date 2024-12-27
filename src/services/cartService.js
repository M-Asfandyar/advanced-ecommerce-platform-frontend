import axios from 'axios'; 

const BASE_URL = 'http://localhost:4000/api/carts'; 

// Fetch the user's cart 
export const fetchCart = async (userId) => { 
  const response = await axios.get(`${BASE_URL}/${userId}`); 
  return response.data;
 }; 

// Add an item to the cart
 export const addToCart = async (userId, productId, quantity) => { 
  const response = await axios.post(`${BASE_URL}/${userId}`, { productId, quantity, }); 
  return response.data; 
}; 
 
 // Remove an item from the cart
  export const removeFromCart = async (userId, productId) => { 
    const response = await axios.delete(`${BASE_URL}/${userId}/${productId}`);
    return response.data; 
  };