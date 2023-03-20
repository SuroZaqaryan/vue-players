import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { computed, onMounted } from 'vue';
import { playersApi } from '@/api/playersApi.js';

export const usePlayers = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading, isStale, isFetching } = useQuery({
    queryKey: ['body-part'],
    queryFn: playersApi.getAllBodyPart,
    staleTime: 10 * 60 * 60 * 1000,
  });

  onMounted(async () => {
    if (isStale.value) {
      await queryClient.invalidateQueries({ queryKey: ['players'] });
    }
  });

  return {
    pending: computed(
      () => isFetching.value || isLoading.value || isError.value
    ),
    data: computed(() => data?.value),
    isEmpty: computed(() => !data.value?.length),
  };
};
