import { useQuery } from '@tanstack/react-query';
import { getCart } from '../../apis/cartApi';

export function useGetCart() {
  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });

  return { cart, isLoading };
}
