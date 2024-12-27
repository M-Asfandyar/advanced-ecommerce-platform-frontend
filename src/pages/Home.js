import React, { useEffect, useState } from 'react';
 import axios from 'axios'; import socket from '../services/socket';
 import { addToCart } from '../services/cartService';
 
 const Home = () => { const [products, setProducts] = useState([]); const userId = '6766e9ad4d725b3ae8e1e536'; 
  useEffect(() => { 
    const fetchProducts = async () => { 
      try { 
        const response = await axios.get('http://localhost:4000/api/products?page=1&limit=10');
         setProducts(response.data.products); 
        } catch (error) { 
          console.error('Error fetching products:', error); } };
         fetchProducts();
         
        // Listen for real-time inventory updates 
        socket.on('inventoryUpdate', (data) => { 
          setProducts((prevProducts) => 
            prevProducts.map((product) => 
              product._id === data.productId ? { ...product, stock: data.stock } : product 
        ) 
      ); 
    }); 
    
    return () => { 
      socket.off('inventoryUpdate'); 
    }; 
  }, []); 
  
  const handleAddToCart = async (productId) => { 
    try { 
      const updatedCart = await addToCart(userId, productId, 1); // Default quantity: 1
      console.log('Cart updated:', updatedCart); 
      alert('Product added to cart successfully!'); 
    } catch (error) { 
      console.error('Error adding to cart:', error); 
      alert('Failed to add product to cart.'); 
    } 
  }; 
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
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 


export default Home;