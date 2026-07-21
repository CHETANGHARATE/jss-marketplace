import { apiClient } from './apiClient';
import { ApiHealthStatus } from '../types/api';

export const healthService = {
  async getHealth(): Promise<ApiHealthStatus> {
    const response = await apiClient.get<ApiHealthStatus>('/health');
    return response.data;
  },
};
