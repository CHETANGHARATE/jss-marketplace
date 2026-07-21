import { useQuery } from '@tanstack/react-query';
import { brandService } from '../services/brandService';

export function useBrands() {
  return useQuery({
    queryKey: ['brands'],
    queryFn: () => brandService.getBrands(),
    staleTime: 1000 * 60 * 10,
  });
}

export function useBrandBySlug(slug: string) {
  return useQuery({
    queryKey: ['brand', slug],
    queryFn: () => brandService.getBrandBySlug(slug),
    enabled: !!slug,
  });
}
