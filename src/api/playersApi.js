import { api } from '@/libs/axios';

export const playersApi = {
  getAllBodyPart: async () => {
    const { data } = await api.get('players');
    return data;
  },
};
