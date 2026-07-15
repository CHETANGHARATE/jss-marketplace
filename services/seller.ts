import { mockSellers } from '../constants/mockData';
import { Seller } from '../types';

const delay = (ms = 50) => new Promise((resolve) => setTimeout(resolve, ms));

export const getSellerById = async (id: string): Promise<Seller | undefined> => {
  await delay(80);
  return mockSellers[id];
};

export const getFeaturedSellers = async (limit = 4): Promise<Seller[]> => {
  await delay(100);
  return Object.values(mockSellers).slice(0, limit);
};
