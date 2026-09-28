# E-commerce MVP


[![Просмотры README](https://vbr.nathanchung.dev/badge?page_id=Richbanker.online-shop&text=README_Views)](https://github.com/Richbanker/online-shop)

Современный MVP интернет-магазина, построенный с использованием React, TypeScript и Tailwind CSS.

## Возможности

- 🛍️ Каталог товаров с фильтрами и сортировкой
- 🎨 Красивый интерфейс с анимациями
- 🛒 Корзина покупок с сохранением данных
- 📱 Адаптивный дизайн
- 🔍 Поиск и фильтрация товаров
- 📄 Пагинация
- 💳 Процесс оформления заказа (симуляция)
- 📦 **История заказов**
- ➡️ **Удобная навигация между страницами товаров, корзины и истории заказов**

## Технологии

- React 18
- TypeScript
- Tailwind CSS
- Zustand (Управление состоянием и сохранение данных)
- React Router
- Framer Motion (Анимации)
- Heroicons

## Начало работы

1. Клонируйте репозиторий
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер разработки:
   ```bash
   npm run dev
   ```

## Структура проекта

```
src/
├── components/     # Переиспользуемые компоненты
├── pages/         # Компоненты страниц (включая Checkout, Orders, ProductDetail)
├── store/         # Хранилище Zustand (cartStore, orderStore)
├── types/         # TypeScript типы
└── utils/         # Вспомогательные функции
```

## Доступные скрипты

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка для продакшена
- `npm run preview` - Предпросмотр продакшен сборки
- `npm run lint` - Запуск ESLint

## Участие в разработке

Вы можете создавать issues и pull requests.

## Лицензия

MIT 