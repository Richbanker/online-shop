import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const CheckoutSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto mb-8" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        Спасибо за ваш заказ!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-8"
      >
        Ваш заказ успешно размещен. Мы отправим вам электронное письмо с
        деталями заказа и информацией для отслеживания.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={() => navigate('/')}
        className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors"
      >
        Продолжить покупки
      </motion.button>
    </div>
  )
}

export default CheckoutSuccess 