import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supportService, CreateTicketPayload } from '../services/supportService';

export function useSupportTicketsQuery(enabled = true) {
  return useQuery({
    queryKey: ['support', 'tickets'],
    queryFn: () => supportService.getTickets(),
    enabled,
    staleTime: 1000 * 60 * 2,
  });
}

export function useSupportTicketQuery(id: number | string) {
  return useQuery({
    queryKey: ['support', 'ticket', id],
    queryFn: () => supportService.getTicket(id),
    enabled: !!id,
  });
}

export function useCreateTicketMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateTicketPayload) => supportService.createTicket(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['support', 'tickets'] });
    },
  });
}

export function useReplyTicketMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, message }: { id: number | string; message: string }) =>
      supportService.replyTicket(id, message),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['support', 'ticket', variables.id] });
    },
  });
}
