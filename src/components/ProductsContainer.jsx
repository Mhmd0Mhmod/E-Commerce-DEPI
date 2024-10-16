import { useSelector } from 'react-redux';
import { getCartItems } from '../slieces/cartSlice';
import ItemProduct from './ItemProduct';

function ProductsContainer() {
  const cart = useSelector(getCartItems);
  return (
    <div className="grid grid-cols-3">
      {cart.map((product) => (
        <ItemProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
