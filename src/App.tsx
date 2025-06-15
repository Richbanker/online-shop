import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import CheckoutSuccess from './pages/CheckoutSuccess'
import ProductDetail from './pages/ProductDetail'
import Orders from './pages/Orders'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App 