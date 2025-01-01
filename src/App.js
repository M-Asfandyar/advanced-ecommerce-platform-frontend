import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home'; 
import ProductDetails from './pages/ProductDetails'; 
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminOrders from './pages/AdminOrders';
import Register from './pages/Register'; 
import Login from './pages/Login'; 
import UserDashboard from './pages/UserDashboard'; 

const App = () => ( 
<Router> 
  <Routes> 
    <Route path="/" element={<Home />} /> 
    <Route path="/product/:id" element={<ProductDetails />} /> 
    <Route path="/cart" element={<Cart />} /> 
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/register" element={<Register />} /> 
    <Route path="/login" element={<Login />} />

    {/* User Dashboard */} 
    <Route path="/dashboard" element={<UserDashboard />} />

    {/* Admin Routes */} 
    <Route path="/admin" element={<AdminDashboard />} /> 
    <Route path="/admin/products" element={<AdminProducts />} /> 
    <Route path="/admin/orders" element={<AdminOrders />} />
  </Routes>
</Router> 
); 

export default App;