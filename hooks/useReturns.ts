import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { returnService, CreateReturnPayload } from '../services/returnService';

export function useReturnsQuery(enabled = true) {
  return useQuery({
    queryKey: ['returns'],
    queryFn: () => returnService.getReturns(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateReturnMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateReturnPayload) => returnService.createReturn(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['returns'] });
    },
  });
}
