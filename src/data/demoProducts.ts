import { Product } from '../types/product'

const image = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="240"><rect width="320" height="240" fill="#eff6ff"/><path d="M110 85h100v95H110z M135 85V65h50v20" fill="none" stroke="#2563eb" stroke-width="8"/><text x="160" y="215" text-anchor="middle" fill="#2563eb" font-size="18">DEMO</text></svg>')

export const demoProducts: Product[] = [
  {
    "id": 1,
    "title": "Рюкзак",
    "category": "men's clothing",
    "price": 49,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4,
      "count": 30
    }
  },
  {
    "id": 2,
    "title": "Футболка",
    "category": "men's clothing",
    "price": 19,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4.5,
      "count": 31
    }
  },
  {
    "id": 3,
    "title": "Куртка",
    "category": "women's clothing",
    "price": 79,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4,
      "count": 32
    }
  },
  {
    "id": 4,
    "title": "Платье",
    "category": "women's clothing",
    "price": 59,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4.5,
      "count": 33
    }
  },
  {
    "id": 5,
    "title": "Наушники",
    "category": "electronics",
    "price": 39,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4,
      "count": 34
    }
  },
  {
    "id": 6,
    "title": "Монитор",
    "category": "electronics",
    "price": 199,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4.5,
      "count": 35
    }
  },
  {
    "id": 7,
    "title": "Кольцо",
    "category": "jewelery",
    "price": 29,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4,
      "count": 36
    }
  },
  {
    "id": 8,
    "title": "Браслет",
    "category": "jewelery",
    "price": 25,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4.5,
      "count": 37
    }
  },
  {
    "id": 9,
    "title": "Конструктор",
    "category": "toys",
    "price": 25,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4,
      "count": 38
    }
  },
  {
    "id": 10,
    "title": "Головоломка",
    "category": "toys",
    "price": 12,
    "description": "Демонстрационный товар для проверки каталога и корзины.",
    "image": image,
    "rating": {
      "rate": 4.5,
      "count": 39
    }
  }
]

