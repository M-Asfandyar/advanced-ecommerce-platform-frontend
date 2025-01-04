import React, { useState } from 'react'; 
import axios from 'axios'; 

const VendorRegister = () => { 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' }); 
  
  const handleRegister = async () => { 
    try { 
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/vendors/register`, formData); 
      alert('Vendor registered successfully!'); 
    } catch (error) { 
      console.error('Error registering vendor:', error); 
      alert('Registration failed.'); 
    } 
  }; 
  
  return ( 
  <div> 
    <h1>Vendor Registration</h1> 
    <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} /> 
    <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /> 
    <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} /> 
    <button onClick={handleRegister}>Register</button> 
  </div> 
  ); 
}; 

export default VendorRegister;