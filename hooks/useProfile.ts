import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { profileService, UpdateProfilePayload, ChangePasswordPayload } from '../services/profileService';

export function useProfileQuery(enabled = true) {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => profileService.getProfile(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useUpdateProfileMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UpdateProfilePayload) => profileService.updateProfile(payload),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(['profile'], updatedUser);
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}

export function useChangePasswordMutation() {
  return useMutation({
    mutationFn: (payload: ChangePasswordPayload) => profileService.changePassword(payload),
  });
}
