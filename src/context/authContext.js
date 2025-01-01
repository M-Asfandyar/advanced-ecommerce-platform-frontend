import React, { createContext, useState } from 'react'; 
export const AuthContext = createContext(); 

const AuthProvider = ({ children }) => { 
  const [auth, setAuth] = useState({ token: null, userId: null }); 
  
  return ( 
  <AuthContext.Provider value={{ auth, setAuth }}> 
  {children} 
  </AuthContext.Provider> 
  ); 
}; 

export default AuthProvider