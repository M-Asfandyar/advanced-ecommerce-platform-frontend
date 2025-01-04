import React, { useState } from 'react';
import axios from 'axios';

const VendorLogin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const handleLogin = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/vendors/login`,
                formData
            );
            localStorage.setItem('vendorToken', response.data.token);
            alert('Login successful!');
            setSuccess('Login successful! Redirecting...');
            setError('');
        } catch (error) {
            setError('Invalid credentials. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div>
            <h1>Vendor Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default VendorLogin;