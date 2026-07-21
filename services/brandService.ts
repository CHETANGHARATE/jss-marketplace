import { apiClient } from './apiClient';
import { ApiBrand, ApiResponse } from '../types/api';

export const brandService = {
  async getBrands(): Promise<ApiBrand[]> {
    const response = await apiClient.get<ApiResponse<ApiBrand[]>>('/brands');
    return response.data.data;
  },

  async getBrandBySlug(slug: string): Promise<ApiBrand> {
    const response = await apiClient.get<ApiResponse<ApiBrand>>(`/brands/${slug}`);
    return response.data.data;
  },
};
