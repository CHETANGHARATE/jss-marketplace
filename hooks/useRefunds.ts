import { useQuery } from '@tanstack/react-query';
import { refundService } from '../services/refundService';

export function useRefundsQuery(enabled = true) {
  return useQuery({
    queryKey: ['refunds'],
    queryFn: () => refundService.getRefunds(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}
