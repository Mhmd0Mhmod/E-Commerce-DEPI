import { useSelector } from 'react-redux';
import ItemProduct from './ItemProduct';
import { getCartItems } from '../slieces/cartSlice';

function NewProducts() {
  const cart = useSelector(getCartItems);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:flex md:overflow-x-scroll gap-6">
      {cart.map((product) => (
        <ItemProduct product={product} key={product.id} />
      ))}
    </div>
  );
}

export default NewProducts;
