import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ShoppingCartIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '../store/cartStore'

const Layout = () => {
  const cartItems = useCartStore((state) => state.items)

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                ОЗОЗОНчикс 
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/orders" className="p-2 text-gray-600 hover:text-primary">
                <ClipboardDocumentListIcon className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="relative p-2">
                <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 