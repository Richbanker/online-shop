import React from 'react'
import { motion } from 'framer-motion'
import { Product } from '../types/product'
import { useCartStore, CartItem } from '../store/cartStore'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation() // Остановить всплытие события, чтобы клик по кнопке не открывал страницу товара
    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    }
    addItem(cartItem)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      <Link to={`/products/${product.id}`} className="flex-grow">
        <div className="relative h-48">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors"
        >
          Добавить в корзину
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProductCard 