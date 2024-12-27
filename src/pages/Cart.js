import React, { useEffect, useState } from 'react'; import { fetchCart, removeFromCart } from '../services/cartService'; 
const Cart = () => { const userId = '6766e9ad4d725b3ae8e1e536'; 
   const [cart, setCart] = useState([]);
   
   useEffect(() => { 
    const loadCart = async () => { 
      try { 
        const cartData = await fetchCart(userId); setCart(cartData.items); 
      } catch (error) { 
        console.error('Error fetching cart:', error); 
      } 
    }; 
    loadCart(); 
  }, []); 
  
  const handleRemoveItem = async (productId) => { 
    try { 
      const updatedCart = await removeFromCart(userId, productId); 
      setCart(updatedCart.items); 
    } catch (error) { 
      console.error('Error removing item:', error); 
    } 
  }; 
  
  return ( 
  <div> 
    <h1>Cart</h1>
    {cart.length > 0 ? ( 
      <ul> 
        {cart.map((item) => ( 
          <li key={item.product._id}> 
          <h2>{item.product.name}</h2> 
          <p>Quantity: {item.quantity}</p> 
          <p>Price: ${item.product.price}</p> 
          <button onClick={() => handleRemoveItem(item.product._id)}>Remove</button> 
        </li> 
      ))} 
    </ul> 
  ) : ( 
    <p>Your cart is empty.</p> 
  )} 
</div> 
); 
}; 


export default Cart;