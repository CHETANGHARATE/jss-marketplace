import { apiClient } from './apiClient';
import { ApiUser, ApiResponse } from '../types/api';

export interface UpdateProfilePayload {
  name: string;
  phone?: string;
  dob?: string;
  gender?: 'male' | 'female' | 'other';
}

export interface ChangePasswordPayload {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}

export const profileService = {
  async getProfile(): Promise<ApiUser> {
    const response = await apiClient.get<ApiResponse<ApiUser>>('/auth/me');
    return response.data.data;
  },

  async updateProfile(payload: UpdateProfilePayload): Promise<ApiUser> {
    const response = await apiClient.put<ApiResponse<ApiUser>>('/profile', payload);
    return response.data.data;
  },

  async changePassword(payload: ChangePasswordPayload): Promise<void> {
    await apiClient.post('/profile/password', payload);
  },
};
