import { useMutation } from '@tanstack/react-query';
import { checkOut as checkOutApi } from '../../apis/orderApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export function useCheckOut() {
  const navigate = useNavigate();
  const { mutate: checkOut, isPending } = useMutation({
    mutationFn: ({ shippingAddress, cartId }) => checkOutApi({ shippingAddress, cartId }),
    onSuccess: (data) => {
      toast.success('the check out is done');
      navigate('/home');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { checkOut, isPending };
}
