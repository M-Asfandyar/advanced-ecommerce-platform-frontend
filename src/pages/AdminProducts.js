import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const AdminProducts = () => { 
  const [products, setProducts] = useState([]); 
  
  
  useEffect(() => { 
    const fetchProducts = async () => { 
      try { 
        const response = await axios.get(`${BASE_URL}/api/products`); 
        setProducts(response.data.products); } catch (error) { console.error('Error fetching products:', error); 
        } 
      }; 
      
       fetchProducts(); 
      }, []); 
      
      return ( 
      <div> 
        <h1>Manage Products</h1> 
        <ul> 
          {products.map((product) => ( 
            <li key={product._id}> 
            <h2>{product.name}</h2> 
            <p>{product.description}</p> 
            <button>Edit</button> 
            <button>Delete</button> 
            </li> 
          ))} 
        </ul> 
      </div> 
    ); 
  }; 
  
  
  export default AdminProducts;
