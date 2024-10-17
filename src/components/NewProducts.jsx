import { useSelector } from 'react-redux';
import ItemProduct from './ItemProduct';

import { useProducts } from '../features/products/useProducts';

function NewProducts() {
  const { products, isLoading } = useProducts();

  if (isLoading) return null;

  console.log(products, isLoading);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:flex  md:w-full md:overflow-x-scroll gap-6">
      {products.products?.map((product) => <ItemProduct product={product} key={product['_id']} />).slice(0, 5)}
    </div>
  );
}

export default NewProducts;
