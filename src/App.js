import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home'; 
import ProductDetails from './pages/ProductDetails'; 
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout'; 

const App = () => ( 
<Router> 
  <Routes> 
    <Route path="/" element={<Home />} /> 
    <Route path="/product/:id" element={<ProductDetails />} /> 
    <Route path="/cart" element={<Cart />} /> 
    <Route path="/checkout" element={<Checkout />} /> 
  </Routes>
</Router> 
); export default App;