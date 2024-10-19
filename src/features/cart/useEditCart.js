import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProductInCart as updateProductInCartApi } from '../../apis/cartApi';

export function useEditCart() {
  const queryClient = useQueryClient();
  const { mutate: editInCart, isPending } = useMutation({
    mutationFn: ({ product, quantity }) => updateProductInCartApi({ product, quantity }),

    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {},
  });
  return { editInCart, isPending };
}
