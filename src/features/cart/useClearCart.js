import { useMutation } from '@tanstack/react-query';
import { clearCart as clearCartApi } from '../../apis/cartApi';

export function useClearCart() {
  const { mutate: clearCart } = useMutation({
    mutationFn: () => clearCartApi(),

    onSuccess: (data) => {},
    onError: (error) => {},
  });
  return { clearCart };
}
