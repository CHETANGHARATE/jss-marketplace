import { apiClient } from './apiClient';
import { ApiResponse } from '../types/api';

export interface ApiRefund {
  id: number;
  refund_number: string;
  order_number: string;
  amount: number;
  gateway: string;
  status: 'pending' | 'processed' | 'failed';
  created_at: string;
}

export const refundService = {
  async getRefunds(): Promise<ApiRefund[]> {
    const response = await apiClient.get<ApiResponse<ApiRefund[]>>('/refunds');
    return response.data.data;
  },
};
