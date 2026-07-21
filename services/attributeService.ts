import { apiClient } from './apiClient';
import { ApiAttribute, ApiResponse } from '../types/api';

export const attributeService = {
  async getAttributes(): Promise<ApiAttribute[]> {
    const response = await apiClient.get<ApiResponse<ApiAttribute[]>>('/attributes');
    return response.data.data;
  },
};
