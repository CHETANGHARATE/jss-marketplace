import { apiClient } from './apiClient';
import { ApiReview, ApiResponse } from '../types/api';

export interface CreateReviewPayload {
  product_id: number;
  rating: number;
  comment: string;
}

export const reviewService = {
  async getMyReviews(): Promise<ApiReview[]> {
    const response = await apiClient.get<ApiResponse<ApiReview[]>>('/reviews/my');
    return response.data.data;
  },

  async createReview(payload: CreateReviewPayload): Promise<ApiReview> {
    const response = await apiClient.post<ApiResponse<ApiReview>>('/reviews', payload);
    return response.data.data;
  },

  async deleteReview(id: number): Promise<void> {
    await apiClient.delete(`/reviews/${id}`);
  },
};
