import { apiClient } from './apiClient';
import { ApiCategory, ApiResponse } from '../types/api';

export const categoryService = {
  async getCategories(): Promise<ApiCategory[]> {
    const response = await apiClient.get<ApiResponse<ApiCategory[]>>('/categories');
    return response.data.data;
  },

  async getCategoryBySlug(slug: string): Promise<ApiCategory> {
    const response = await apiClient.get<ApiResponse<ApiCategory>>(`/categories/${slug}`);
    return response.data.data;
  },
};
