import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const userToken = localStorage.getItem('userToken');
    const vendorToken = localStorage.getItem('vendorToken');

    // Allow access if either a user or a vendor is authenticated
    return (userToken || vendorToken) ? children : <Navigate to="/vendor-login" />; 
};

export default PrivateRoute;


