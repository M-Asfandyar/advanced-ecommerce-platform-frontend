import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
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
import VendorOrders from './pages/VendorOrders';
import PrivateRoute from './components/PrivateRoute'; 

const App = () => {
    const vendorToken = localStorage.getItem('vendorToken');
    const userToken = localStorage.getItem('userToken');

    return (
        <Router>
            {/* ✅ Navigation Bar Added Here */}
            <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                {userToken && (
                    <>
                        <Link to="/dashboard" style={{ marginRight: '10px' }}>User Dashboard</Link>
                        <button onClick={() => {
                            localStorage.removeItem('userToken');
                            window.location.href = '/login';
                        }}>Logout (User)</button>
                    </>
                )}
                {vendorToken ? (
                    <>
                        <Link to="/vendor/orders" style={{ marginRight: '10px' }}>Vendor Orders</Link>
                        <button onClick={() => {
                            localStorage.removeItem('vendorToken');
                            window.location.href = '/vendor-login';
                        }}>Logout (Vendor)</button>
                    </>
                ) : (
                    <>
                        <Link to="/vendor-register" style={{ marginRight: '10px' }}>Vendor Register</Link>
                        <Link to="/vendor-login">Vendor Login</Link>
                    </>
                )}
            </nav>

            {/* ✅ Main Application Routes */}
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

                {/* Vendor Orders Page (Protected) */}
                <Route path="/vendor/orders" element={<PrivateRoute><VendorOrders /></PrivateRoute>} />

                {/* Admin Routes (Protected) */}
                <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                <Route path="/admin/products" element={<PrivateRoute><AdminProducts /></PrivateRoute>} />
                <Route path="/admin/orders" element={<PrivateRoute><AdminOrders /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default App;