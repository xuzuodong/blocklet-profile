import useSWR from 'swr';
import { Profile } from '@/types/profile';
import { fetcher } from '@/lib/utils';

export function useSwrProfile() {
  const { data, error, isLoading } = useSWR<Profile>('/api/profile', fetcher);
  return {
    profile: data,
    error,
    isLoading,
  };
}
