import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Product } from '../types/product'
import { useCartStore, CartItem } from '../store/cartStore'
import { motion } from 'framer-motion'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [addedToCart, setAddedToCart] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        setProduct(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      }
      addItem(cartItem)
      setAddedToCart(true)
      setTimeout(() => {
        setAddedToCart(false)
      }, 3000)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!product) {
    return <div className="text-center text-red-500">Товар не найден.</div>
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
      <motion.img
        src={product.image}
        alt={product.title}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/3 h-64 object-contain rounded-md mb-6 md:mb-0 md:mr-8"
      />
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-primary text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
        <div className="flex space-x-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
          >
            Добавить в корзину
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/cart')}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Перейти в корзину
          </motion.button>
        </div>
        {addedToCart && (
          <span className="text-green-600 font-semibold mt-2 block">Товар добавлен в корзину!</span>
        )}
      </div>
    </div>
  )
}

export default ProductDetail 