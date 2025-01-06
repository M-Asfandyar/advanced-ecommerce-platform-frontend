import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const token = localStorage.getItem('vendorToken');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/orders/vendor`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching vendor orders.');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [token]);

    if (loading) return <p>Loading orders...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h1>Vendor Orders</h1>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <div key={order._id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                        <p><strong>Order ID:</strong> {order._id}</p>
                        <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                        <p><strong>Status:</strong> {order.orderStatus}</p>
                        <p><strong>Address:</strong> {order.address}</p>
                        <p><strong>Items:</strong></p>
                        <ul>
                            {order.items.map((item, index) => (
                                <li key={index}>
                                    {item.product.name} - Quantity: {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No orders found for this vendor.</p>
            )}
        </div>
    );
};

export default VendorOrders;