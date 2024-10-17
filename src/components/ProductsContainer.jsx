import { useSelector } from 'react-redux';
import { getCartItems } from '../slieces/cartSlice';
import ItemProduct from './ItemProduct';
import { useProducts } from '../features/products/useProducts';
import { useSearchParams } from 'react-router-dom';

function ProductsContainer() {
  const { products, isLoading } = useProducts();

  const [searchParams] = useSearchParams();

  if (isLoading) return null;

  const filterValue = searchParams.get('filter') ?? 'all';

  let filterProducts;
  if (filterValue === 'all') {
    filterProducts = products.products;
  } else {
    filterProducts = products?.products?.filter((product) => {
      return product.subcategory.name === filterValue;
    });
  }
  console.log(filterProducts);

  // const filterValue
  return (
    <div className="grid grid-cols-4">
      {filterProducts.map((product) => (
        <ItemProduct key={product['_id']} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
