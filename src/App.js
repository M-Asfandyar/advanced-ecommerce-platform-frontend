import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home'; 
import ProductDetails from './pages/ProductDetails'; 
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminOrders from './pages/AdminOrders'; 

const App = () => ( 
<Router> 
  <Routes> 
    <Route path="/" element={<Home />} /> 
    <Route path="/product/:id" element={<ProductDetails />} /> 
    <Route path="/cart" element={<Cart />} /> 
    <Route path="/checkout" element={<Checkout />} />

    {/* Admin Routes */} 
    <Route path="/admin" element={<AdminDashboard />} /> 
    <Route path="/admin/products" element={<AdminProducts />} /> 
    <Route path="/admin/orders" element={<AdminOrders />} />
  </Routes>
</Router> 
); 

export default App;