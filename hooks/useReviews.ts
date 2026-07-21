import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewService, CreateReviewPayload } from '../services/reviewService';

export function useMyReviewsQuery(enabled = true) {
  return useQuery({
    queryKey: ['reviews', 'my'],
    queryFn: () => reviewService.getMyReviews(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateReviewMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateReviewPayload) => reviewService.createReview(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}

export function useDeleteReviewMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => reviewService.deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}
