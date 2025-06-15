import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

interface CartStore {
  items: CartItem[]
  lastItemAdded: string | null
  lastItemAddedTimeout?: ReturnType<typeof setTimeout>
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  clearLastItemAdded: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      lastItemAdded: null,
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          let newItems
          if (existingItem) {
            newItems = state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          } else {
            newItems = [...state.items, { ...item, quantity: 1 }]
          }

          if (get().lastItemAddedTimeout) {
            clearTimeout(get().lastItemAddedTimeout)
          }

          const lastItemAddedTimeout = setTimeout(() => {
            set({ lastItemAdded: null, lastItemAddedTimeout: undefined })
          }, 3000)

          return { 
            items: newItems,
            lastItemAdded: item.title,
            lastItemAddedTimeout
          }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      clearLastItemAdded: () => set({ lastItemAdded: null }),
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ items: state.items }),
    }
  )
) 