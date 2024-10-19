import { useMutation } from '@tanstack/react-query';
import { addToCart as addToCartApi } from '../../apis/cartApi';

export function useAddCart() {
  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: (product) => addToCartApi(product),

    onSuccess: (data) => {},
    onError: (error) => {},
  });
  return { addToCart, isPending };
}
