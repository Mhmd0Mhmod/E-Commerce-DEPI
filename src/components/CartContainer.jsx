import { useSelector } from 'react-redux';
import CartTotal from './CartTotal';
import ContainerCartItems from './ContainerCartItems';
import NumCartItem from './NumCartItem';
import { getCartItems } from '../slieces/cartSlice';

function CartContainer() {
  const cart = useSelector(getCartItems);
  return (
    <div className=" w-[500px]">
      <NumCartItem num={cart.length} />
      <ContainerCartItems cart={cart} />
      <CartTotal />
    </div>
  );
}

export default CartContainer;
