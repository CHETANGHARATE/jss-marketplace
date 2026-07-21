import { useQuery } from '@tanstack/react-query';
import { attributeService } from '../services/attributeService';

export function useAttributes() {
  return useQuery({
    queryKey: ['attributes'],
    queryFn: () => attributeService.getAttributes(),
    staleTime: 1000 * 60 * 10,
  });
}
