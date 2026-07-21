import { apiClient } from './apiClient';
import { ApiResponse } from '../types/api';

export interface SystemSettings {
  site_name?: string;
  support_email?: string;
  support_phone?: string;
  currency_symbol?: string;
  currency_code?: string;
  [key: string]: any;
}

export const settingService = {
  async getSettings(): Promise<SystemSettings> {
    const response = await apiClient.get<ApiResponse<SystemSettings>>('/settings');
    return response.data.data;
  },
};
