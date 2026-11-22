import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
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
        <Route path="*" element={
          <div className="py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Страница не найдена</h1>
            <p className="mt-3 text-gray-600">Проверьте адрес страницы.</p>
            <Link to="/" className="mt-6 inline-block text-primary underline">Вернуться в каталог</Link>
          </div>
        } />
      </Route>
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App 