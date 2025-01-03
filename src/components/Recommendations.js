import React, { useEffect, useState } from 'react'; 
import { fetchRecommendations } from '../services/recommendationService'; 

const Recommendations = ({ userId }) => { 
  const [recommendations, setRecommendations] = useState([]); 
  
  useEffect(() => { 
    const getRecommendations = async () => { 
      try { 
        const data = await fetchRecommendations(userId); 
        setRecommendations(data); 
      } catch (error) { 
        console.error('Error fetching recommendations:', error); 
      } 
    }; 
    
    getRecommendations(); 
  }, [userId]); 
  
  return ( 
  <div> 
    <h2>Recommended for You</h2> 
    {recommendations.length > 0 ? ( 
      <ul> 
        {recommendations.map((product) => ( 
          <li key={product._id}> 
          <h3>{product.name}</h3> 
          <p>Category: {product.category}</p> 
          <p>Price: ${product.price}</p> 
          </li> 
        ))} 
      </ul> 
    ) : ( 
      <p>No recommendations available.</p> 
    )} 
    </div> 
  ); 
}; 


export default Recommendations;