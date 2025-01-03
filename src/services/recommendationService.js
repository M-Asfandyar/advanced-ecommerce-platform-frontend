import axios from 'axios'; 

const BASE_URL = process.env.REACT_APP_BACKEND_URL; 

export const fetchRecommendations = async (userId) => { 
  const response = await axios.get(`${BASE_URL}/api/recommendations/${userId}`); 
  return response.data; 
}
