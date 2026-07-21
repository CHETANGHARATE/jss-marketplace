import { apiClient } from './apiClient';
import { ApiResponse, ApiUser } from '../types/api';

export interface LoginPayload {
  email: string;
  password?: string;
  phone?: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password?: string;
  phone?: string;
  role?: 'customer' | 'seller';
}

export interface AuthResponseData {
  user: ApiUser;
  token: string;
}

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponseData> {
    const response = await apiClient.post<ApiResponse<AuthResponseData>>('/auth/login', payload);
    return response.data.data;
  },

  async register(payload: RegisterPayload): Promise<AuthResponseData> {
    const response = await apiClient.post<ApiResponse<AuthResponseData>>('/auth/register', payload);
    return response.data.data;
  },

  async getProfile(): Promise<ApiUser> {
    const response = await apiClient.get<ApiResponse<ApiUser>>('/auth/me');
    return response.data.data;
  },

  async updateProfile(payload: Partial<RegisterPayload>): Promise<ApiUser> {
    const response = await apiClient.put<ApiResponse<ApiUser>>('/auth/profile', payload);
    return response.data.data;
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
    } catch {
      // Clear token locally regardless
    }
  },
};
