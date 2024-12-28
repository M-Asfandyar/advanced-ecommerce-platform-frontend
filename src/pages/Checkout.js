import React, { useState } from 'react';
import { createOrder } from '../services/orderService';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm'; const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key

const Checkout = () => { 
  const userId = '6766e9ad4d725b3ae8e1e536'; 
  const [address, setAddress] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async () => { 
    try {
      const order = await createOrder(userId, address);
      setOrderStatus('Order created successfully! Proceed with payment.'); setOrderId(order._id); // Store order ID for payment tracking
   } catch (error) {
     setOrderStatus('Failed to place order. Please try again.'); console.error('Error creating order:', error); 
    } 
  };
   
   return ( 
    <div> 
      <h1>Checkout</h1> 
      <label> Delivery Address: 
        <input 
        type="text" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} placeholder="Enter your delivery address" 
        /> 
      </label> 
      <button onClick={handleCheckout}>Place Order</button> 
      
      {orderStatus && <p>{orderStatus}</p>} 
      {/* Render Stripe payment form after order creation */}
      {orderId && ( <Elements stripe={stripePromise}> 
        <CheckoutForm orderId={orderId} /> 
      </Elements> 
      )} 
    </div> 
    ); 
  }; 
  
  export default Checkout;