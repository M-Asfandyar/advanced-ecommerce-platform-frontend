import React, { useContext, useState } from 'react'; 
import axios from 'axios'; import { AuthContext } from '../context/authContext'; 

const Login = () => { 
  const { setAuth } = useContext(AuthContext); 
  const [formData, setFormData] = useState({ email: '', password: '' });
 
  const handleLogin = async () => { 
    try { 
      const response = await axios.post('http://localhost:4000/api/users/login', formData); 
      setAuth({ token: response.data.token, userId: response.data.userId }); 
      alert('Login successful!'); 
    } catch (error) { 
      console.error('Error logging in:', error); 
      alert('Login failed.'); 
    } 
  }; 
  
  
  return ( 
  <div> 
    <h1>Login</h1> 
    <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /> 
    <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} /> 
    <button onClick={handleLogin}>Login</button> 
    </div> 
  ); 
}; 


export default Login;