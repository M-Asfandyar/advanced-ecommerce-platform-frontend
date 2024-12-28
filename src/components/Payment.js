import React from 'react'; 
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // You'll create this next 

const stripePromise = loadStripe('your-publishable-key-here');
const Payment = () => { 
  return ( 
  <Elements stripe={stripePromise}> 
    <CheckoutForm /> 
  </Elements> 
  ); 
}; 

export default Payment;