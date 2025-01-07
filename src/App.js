import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
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
    const { t, i18n } = useTranslation(); // Initialize translation functions

    // Language switcher function
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <Router>
            {/* ✅ Navigation Bar with Language Selector */}
            <nav style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Link to="/" style={{ marginRight: '10px' }}>{t('home')}</Link>
                    {userToken && (
                        <>
                            <Link to="/dashboard" style={{ marginRight: '10px' }}>{t('userDashboard')}</Link>
                            <button onClick={() => {
                                localStorage.removeItem('userToken');
                                window.location.href = '/login';
                            }}>
                                {t('logout')} ({t('user')})
                            </button>
                        </>
                    )}
                    {vendorToken ? (
                        <>
                            <Link to="/vendor/orders" style={{ marginRight: '10px' }}>{t('vendorOrders')}</Link>
                            <button onClick={() => {
                                localStorage.removeItem('vendorToken');
                                window.location.href = '/vendor-login';
                            }}>
                                {t('logout')} ({t('vendor')})
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/vendor-register" style={{ marginRight: '10px' }}>{t('vendorRegister')}</Link>
                            <Link to="/vendor-login">{t('vendorLogin')}</Link>
                        </>
                    )}
                </div>
                {/* Language Selector */}
                <div>
                    <button onClick={() => changeLanguage('en')} style={{ marginRight: '5px' }}>English</button>
                    <button onClick={() => changeLanguage('es')} style={{ marginRight: '5px' }}>Español</button>
                    <button onClick={() => changeLanguage('de')}>Deutsch</button>
                </div>
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