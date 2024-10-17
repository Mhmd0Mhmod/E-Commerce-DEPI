import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../apis/productsApi';

export function useProducts() {
  const { data: products, isLoading } = useQuery({ queryKey: ['products'], queryFn: getProducts });

  return { products, isLoading };
}
