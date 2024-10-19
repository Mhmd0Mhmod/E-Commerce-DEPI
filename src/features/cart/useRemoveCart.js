import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeFromCart as removeFromCartApi } from '../../apis/cartApi';

export function useRemoveCart() {
  const queryClient = useQueryClient();
  const { mutate: removeFromCart, isPending } = useMutation({
    mutationFn: (id) => removeFromCartApi(id),

    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {},
  });
  return { removeFromCart, isPending };
}
