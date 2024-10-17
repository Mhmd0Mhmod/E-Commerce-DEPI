import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../apis/productsApi';
import { useParams } from 'react-router-dom';

export function useProduct() {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({ queryKey: [`product-${id}`], queryFn: () => getProduct(id) });

  return { product, isLoading };
}
