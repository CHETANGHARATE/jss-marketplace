import { apiClient } from './apiClient';
import { ApiResponse } from '../types/api';

export interface ApiSupportTicketMessage {
  id: number;
  user_name: string;
  is_admin: boolean;
  message: string;
  created_at: string;
}

export interface ApiSupportTicket {
  id: number;
  ticket_number: string;
  subject: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  messages?: ApiSupportTicketMessage[];
  created_at: string;
}

export interface CreateTicketPayload {
  subject: string;
  category: string;
  priority?: string;
  message: string;
}

export const supportService = {
  async getTickets(): Promise<ApiSupportTicket[]> {
    const response = await apiClient.get<ApiResponse<ApiSupportTicket[]>>('/support/tickets');
    return response.data.data;
  },

  async getTicket(id: number | string): Promise<ApiSupportTicket> {
    const response = await apiClient.get<ApiResponse<ApiSupportTicket>>(`/support/tickets/${id}`);
    return response.data.data;
  },

  async createTicket(payload: CreateTicketPayload): Promise<ApiSupportTicket> {
    const response = await apiClient.post<ApiResponse<ApiSupportTicket>>('/support/tickets', payload);
    return response.data.data;
  },

  async replyTicket(id: number | string, message: string): Promise<ApiSupportTicketMessage> {
    const response = await apiClient.post<ApiResponse<ApiSupportTicketMessage>>(`/support/tickets/${id}/reply`, {
      message,
    });
    return response.data.data;
  },
};
