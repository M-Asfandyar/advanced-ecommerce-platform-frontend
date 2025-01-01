import React, { useState } from 'react'; 
import axios from 'axios'; 

const Register = () => { 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' }); 
  const handleRegister = async () => {
    try { 
      await axios.post('http://localhost:4000/api/users/register', formData); alert('Registration successful!'); 
    } catch (error) { 
      console.error('Error registering user:', error); 
      alert('Registration failed.'); 
    } 
  }; 
  
  return ( 
  <div> 
    <h1>Register</h1> 
    <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} /> 
    <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /> 
    <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} /> 
    <button onClick={handleRegister}>Register</button> 
  </div> 
  ); 
}; 


export default Register;