import React, { useState } from 'react'; 
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'; 

const CheckoutForm = () => { 
  const stripe = useStripe(); 
  const elements = useElements(); 
  const [status, setStatus] = useState(''); 
  
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    const cardElement = elements.getElement(CardElement); 
    try { 
      const { paymentIntent, error } = await stripe.confirmCardPayment('your-client-secret', { payment_method: { 
        card: cardElement, 
      }, 
    }); 
    
    if (error) {
      setStatus('Payment failed. Please try again.');
     } else if (paymentIntent) { 
      setStatus('Payment successful! Thank you for your purchase.'); 
    } 
  } catch (err) { 
    console.error('Error processing payment:', err); 
    setStatus('Payment error. Please contact support.'); 
  } 
}; 

return ( 
  <form onSubmit={handleSubmit}> 
    <CardElement /> 
    <button type="submit" disabled={!stripe}> 
      Pay Now   
    </button> 
    {status && <p>{status}</p>} 
  </form> 
  );
}; 

export default CheckoutForm;