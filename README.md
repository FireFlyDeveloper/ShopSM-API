# ShopSM API

## Overview

ShopSM API is a Next.js-based application that serves product data scraped from ShopSM.com for development and testing purposes. The application provides a clean, responsive interface with dark mode support and several API endpoints for accessing product data.

## Features

- 🛍️ Product data from ShopSM.com
- 🔍 Real-time search functionality
- 📄 Paginated results
- 💰 Price range filtering
- 🌙 Dark mode support
- 📱 Responsive design

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Font**: System sans-serif font stack
- **Deployment**: Vercel (optimized)

## API Endpoints

### 1. Paginated Products
```http
GET /api/get?page=1
```
Returns paginated product results.

### 2. Search Suggestions
```http
GET /api/searches?q=coffee
```
Provides real-time search suggestions based on query.

### 3. Price Filter
```http
GET /api/filter?min=100&max=500
```
Filters products by price range.

## Project Structure

```
shopsm-api/
├── app/
│   ├── api/
│   │   ├── get/
│   │   ├── searches/
│   │   └── filter/
│   ├── page.tsx
│   └── layout.tsx
├── public/
│   └── next.svg
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone 
cd shopsm-api
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The application is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically

## Environment Setup

No environment variables are required for basic functionality. The application uses local data scraping from ShopSM.com.

## License

This project is built for educational and development purposes. Please ensure compliance with ShopSM.com's terms of service when using scraped data.

## Support

For support and questions:
- Check the API documentation above
- Ensure you're using the correct endpoint formats
- Verify your query parameters are properly formatted

---

Built with ❤️ using Next.js and App Router.