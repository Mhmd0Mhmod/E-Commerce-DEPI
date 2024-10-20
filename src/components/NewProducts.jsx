import ItemProduct from './ItemProduct';

import { useProducts } from '../features/products/useProducts';
import Loader from './Loader';

function NewProducts() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:flex  md:w-full md:overflow-x-scroll gap-6">
      {products.products?.map((product) => <ItemProduct product={product} key={product['_id']} />).slice(0, 5)}
    </div>
  );
}

export default NewProducts;
