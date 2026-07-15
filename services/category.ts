import { mockCategories } from '../constants/mockData';
import { Category } from '../types';

const delay = (ms = 50) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCategories = async (): Promise<Category[]> => {
  await delay(100);
  return mockCategories;
};

export const getCategoryById = async (id: string): Promise<Category | undefined> => {
  await delay(100);
  return mockCategories.find((c) => c.id === id);
};
