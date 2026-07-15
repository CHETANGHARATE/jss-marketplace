import { mockProducts } from '../constants/mockData';
import { FilterParams, Product } from '../types';

// Simulate network delay
const delay = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (filters?: FilterParams): Promise<Product[]> => {
  await delay(200);
  let products = [...mockProducts];

  if (!filters) return products;

  // Search filter
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (filters.category) {
    products = products.filter((p) => p.category === filters.category);
  }

  // Subcategory filter
  if (filters.subcategory) {
    products = products.filter((p) => p.subcategory === filters.subcategory);
  }

  // Brand filter (supports array)
  if (filters.brand && filters.brand.length > 0) {
    products = products.filter((p) => filters.brand?.includes(p.brand));
  }

  // Price range filter
  if (filters.minPrice !== undefined) {
    products = products.filter((p) => p.offerPrice >= (filters.minPrice ?? 0));
  }
  if (filters.maxPrice !== undefined) {
    products = products.filter((p) => p.offerPrice <= (filters.maxPrice ?? Infinity));
  }

  // Rating filter (rating is dynamic, e.g. "and above")
  if (filters.rating !== undefined) {
    products = products.filter((p) => p.rating >= (filters.rating ?? 0));
  }

  // Discount filter (discount % is dynamic, e.g. "and above")
  if (filters.discount !== undefined) {
    products = products.filter((p) => p.discountPercent >= (filters.discount ?? 0));
  }

  // Stock status filter
  if (filters.stockStatus) {
    products = products.filter((p) => p.stockStatus === filters.stockStatus);
  }

  // Sort
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'newest':
        // Mocking newest by sorting by ID descending
        products.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'popularity':
        // Sort by review count
        products.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case 'price_low_high':
        products.sort((a, b) => a.offerPrice - b.offerPrice);
        break;
      case 'price_high_low':
        products.sort((a, b) => b.offerPrice - a.offerPrice);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
  }

  return products;
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  await delay(100);
  return mockProducts.find((p) => p.id === id);
};

export const getTrendingProducts = async (limit = 8): Promise<Product[]> => {
  await delay(150);
  // Sort by review count for popularity
  return [...mockProducts].sort((a, b) => b.reviewsCount - a.reviewsCount).slice(0, limit);
};

export const getNewArrivals = async (limit = 8): Promise<Product[]> => {
  await delay(150);
  // Mocking newest by reverse sorting IDs
  return [...mockProducts].sort((a, b) => b.id.localeCompare(a.id)).slice(0, limit);
};

export const getBestSellers = async (limit = 8): Promise<Product[]> => {
  await delay(150);
  // Filter items with high ratings
  return [...mockProducts].sort((a, b) => b.rating - a.rating).slice(0, limit);
};

export const getFeaturedProductsByCategory = async (
  categoryId: string,
  limit = 6
): Promise<Product[]> => {
  await delay(150);
  return mockProducts.filter((p) => p.category === categoryId).slice(0, limit);
};
