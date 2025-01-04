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
import VendorRegister from './pages/VendorRegister'; 
import VendorLogin from './pages/VendorLogin'; 
import PrivateRoute from './components/PrivateRoute'; 

const App = () => ( 
    <Router> 
        <Routes> 
            {/* Public Routes */}
            <Route path="/" element={<Home />} /> 
            <Route path="/product/:id" element={<ProductDetails />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/vendor-register" element={<VendorRegister />} />
            <Route path="/vendor-login" element={<VendorLogin />} />

            {/* User Dashboard (Protected) */}
            <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />

            {/* Admin Routes (Protected) */}
            <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
            <Route path="/admin/products" element={<PrivateRoute><AdminProducts /></PrivateRoute>} />
            <Route path="/admin/orders" element={<PrivateRoute><AdminOrders /></PrivateRoute>} />
        </Routes>
    </Router> 
); 

export default App;