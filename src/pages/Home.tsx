import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { Product, ProductFilters } from '../types/product'
import { useCartStore } from '../store/cartStore'

const Home = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<ProductFilters>({})
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const lastItemAdded = useCartStore((state) => state.lastItemAdded)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setAllProducts(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }

  const fakeToys: Product[] = [
    {
      id: 101,
      title: "Конструктор Космический корабль",
      price: 25.99,
      description: "Отличный конструктор для юных инженеров!",
      category: "toys",
      image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Toy+1",
      rating: { rate: 4.5, count: 120 }
    },
    {
      id: 102,
      title: "Набор машинок гоночных",
      price: 15.50,
      description: "Быстрые машинки для захватывающих гонок!",
      category: "toys",
      image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Toy+2",
      rating: { rate: 4.2, count: 85 }
    },
    {
      id: 103,
      title: "Мягкая игрушка Медвежонок",
      price: 12.00,
      description: "Мягкий и пушистый друг для обнимашек.",
      category: "toys",
      image: "https://via.placeholder.com/150/008000/FFFFFF?text=Toy+3",
      rating: { rate: 4.8, count: 200 }
    },
    {
      id: 104,
      title: "Кукла Волшебница",
      price: 30.00,
      description: "Кукла с магическими способностями.",
      category: "toys",
      image: "https://via.placeholder.com/150/FFFF00/000000?text=Toy+4",
      rating: { rate: 4.6, count: 150 }
    },
    {
      id: 105,
      title: "Головоломка Лабиринт",
      price: 8.75,
      description: "Увлекательная головоломка для развития логики.",
      category: "toys",
      image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Toy+5",
      rating: { rate: 4.3, count: 95 }
    },
  ]

  const filteredProducts = (filters.category === 'toys' ? fakeToys : allProducts).filter((product) => {
    if (filters.category && product.category !== filters.category) return false
    if (filters.minPrice && product.price < filters.minPrice) return false
    if (filters.maxPrice && product.price > filters.maxPrice) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === 'price') {
      return filters.sortOrder === 'asc'
        ? a.price - b.price
        : b.price - a.price
    }
    if (filters.sortBy === 'rating') {
      return filters.sortOrder === 'asc'
        ? a.rating.rate - b.rating.rate
        : b.rating.rate - a.rating.rate
    }
    return 0
  })

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Товары</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <select
            className="p-2 border rounded-md"
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value || undefined })
            }
          >
            <option value="">Все категории</option>
            <option value="electronics">Электроника</option>
            <option value="jewelery">Ювелирные изделия</option>
            <option value="men's clothing">Мужская одежда</option>
            <option value="women's clothing">Женская одежда</option>
            <option value="toys">Игрушки</option>
          </select>
          <select
            className="p-2 border rounded-md"
            onChange={(e) =>
              setFilters({
                ...filters,
                sortBy: e.target.value as 'price' | 'rating' | undefined,
              })
            }
          >
            <option value="">Сортировать по</option>
            <option value="price">Цене</option>
            <option value="rating">Рейтингу</option>
          </select>
          <select
            className="p-2 border rounded-md"
            onChange={(e) =>
              setFilters({
                ...filters,
                sortOrder: e.target.value as 'asc' | 'desc' | undefined,
              })
            }
          >
            <option value="">Порядок</option>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </div>
      </div>

      {lastItemAdded && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">"{lastItemAdded}" добавлен в корзину!</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'bg-buttonGrey text-white hover:bg-buttonGreyHover'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home 