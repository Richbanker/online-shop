import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from './cartStore'

export interface Order {
  id: number
  customerInfo: {
    name: string
    email: string
    address: string
    city: string
    zipCode: string
  }
  items: CartItem[]
  total: number
  date: string
}

interface OrderStore {
  orders: Order[]
  addOrder: (order: Omit<Order, 'id' | 'date'>) => void
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (orderData) => {
        const newOrder: Order = {
          ...orderData,
          id: Date.now(),
          date: new Date().toISOString()
        }
        set((state) => ({
          orders: [...state.orders, newOrder]
        }))
      }
    }),
    {
      name: 'order-storage'
    }
  )
) 