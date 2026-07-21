import { apiClient } from './apiClient';
import { ApiResponse } from '../types/api';

export interface ApiReturnRequest {
  id: number;
  order_number: string;
  reason: string;
  status: 'requested' | 'approved' | 'item_received' | 'refunded' | 'rejected';
  created_at: string;
}

export interface CreateReturnPayload {
  order_number: string;
  reason: string;
  notes?: string;
}

export const returnService = {
  async getReturns(): Promise<ApiReturnRequest[]> {
    const response = await apiClient.get<ApiResponse<ApiReturnRequest[]>>('/returns');
    return response.data.data;
  },

  async createReturn(payload: CreateReturnPayload): Promise<ApiReturnRequest> {
    const response = await apiClient.post<ApiResponse<ApiReturnRequest>>('/returns', payload);
    return response.data.data;
  },
};
