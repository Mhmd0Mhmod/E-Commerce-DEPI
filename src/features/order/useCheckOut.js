import { useMutation } from '@tanstack/react-query';
import { checkOut as checkOutApi } from '../../apis/orderApi';
export function useCheckOut() {
  const { mutate: checkOut, isPending } = useMutation({
    mutationFn: (shippingAddress) => checkOutApi(shippingAddress),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { checkOut, isPending };
}
