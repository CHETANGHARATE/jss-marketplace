import { apiClient } from './apiClient';
import { ApiNotification, ApiResponse } from '../types/api';

export const notificationService = {
  async getNotifications(): Promise<ApiNotification[]> {
    const response = await apiClient.get<ApiResponse<ApiNotification[]>>('/notifications');
    return response.data.data;
  },

  async markAsRead(id: number | string): Promise<void> {
    await apiClient.post(`/notifications/${id}/read`);
  },

  async markAllAsRead(): Promise<void> {
    await apiClient.post('/notifications/read-all');
  },
};
