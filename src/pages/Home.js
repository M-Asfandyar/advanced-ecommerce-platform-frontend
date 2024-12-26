import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import socket from '../services/socket';

const Home = () => { 
  const [products, setProducts] = useState([]); 
  useEffect(() => { 
    const fetchProducts = async () => { 
    try { const response = await axios.get('http://localhost:4000/api/products?page=1&limit=10'); setProducts(response.data.products); } catch (error) { console.error('Error fetching products:', error); } 
  }; 
  fetchProducts(); 

// Listen for real-time inventory updates 
socket.on('inventoryUpdate', (data) => { 
  setProducts((prevProducts) => 
    prevProducts.map((product) => 
      product._id === data.productId ? { ...product, stock: data.stock } : product
    ) 
  ); 
}); return () => { socket.off('inventoryUpdate'); };


}, []); 
return ( 
<div> 
  <h1>Products</h1> 
  <div> 
    {products.map((product) => ( 
      <div key={product._id}> 
      <h2>{product.name}</h2> 
      <p>{product.description}</p> 
      <p>Price: ${product.price}</p> 
      <p>Stock: {product.stock}</p> 
      </div> 
      ))} 
      </div> 
      </div> ); 
}; 

export default Home;