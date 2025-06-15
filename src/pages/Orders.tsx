import React from 'react'
import { useOrderStore } from '../store/orderStore'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const orders = useOrderStore((state) => state.orders)
  const navigate = useNavigate()

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          У вас пока нет заказов
        </h2>
        <button
          onClick={() => navigate('/cart')}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
        >
          Перейти в корзину
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">История заказов</h1>
      <div className="space-y-6 mb-8">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Заказ #{order.id}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(order.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <span className="text-xl font-bold text-primary">
                ${order.total.toFixed(2)}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Информация о доставке:</h4>
              <div className="text-sm text-gray-600">
                <p>{order.customerInfo.name}</p>
                <p>{order.customerInfo.email}</p>
                <p>{order.customerInfo.address}</p>
                <p>{order.customerInfo.city}, {order.customerInfo.zipCode}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Товары:</h4>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-right">
                      <p>${item.price.toFixed(2)} x {item.quantity}</p>
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/cart')}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Перейти в корзину
        </button>
      </div>
    </div>
  )
}

export default Orders 