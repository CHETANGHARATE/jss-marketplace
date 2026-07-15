import { mockCategories, mockProducts } from '../constants/mockData';
import { Product } from '../types';

const delay = (ms = 30) => new Promise((resolve) => setTimeout(resolve, ms));

export interface SearchSuggestions {
  products: { id: string; name: string; category: string }[];
  categories: { id: string; nameKey: string }[];
  trending: string[];
}

export const getSearchSuggestions = async (query: string): Promise<SearchSuggestions> => {
  await delay(50);
  
  const trending = [
    'Organic cotton seeds',
    'Active noise cancelling headphones',
    'Solid wood coffee table',
    'Anarkali kurta set',
    'Yoga mat TPE',
    'Dash camera 4K'
  ];

  if (!query || query.trim() === '') {
    return {
      products: [],
      categories: [],
      trending
    };
  }

  const cleanQuery = query.toLowerCase().trim();

  // Find matching categories
  const matchingCategories = mockCategories
    .filter(
      (c) =>
        c.id.toLowerCase().includes(cleanQuery) ||
        c.description.toLowerCase().includes(cleanQuery)
    )
    .map((c) => ({ id: c.id, nameKey: c.name }))
    .slice(0, 3);

  // Find matching products
  const matchingProducts = mockProducts
    .filter(
      (p) =>
        p.name.toLowerCase().includes(cleanQuery) ||
        p.brand.toLowerCase().includes(cleanQuery) ||
        p.tags.some((t) => t.toLowerCase().includes(cleanQuery))
    )
    .map((p) => ({ id: p.id, name: p.name, category: p.category }))
    .slice(0, 5);

  return {
    products: matchingProducts,
    categories: matchingCategories,
    trending
  };
};
