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
        const id = get().orders.reduce((max, order) => Math.max(max, order.id + 1), Date.now())
        const newOrder: Order = {
          ...orderData,
          id,
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