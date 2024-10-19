import { useSelector } from 'react-redux';
import CartTotal from './CartTotal';
import ContainerCartItems from './ContainerCartItems';
import NumCartItem from './NumCartItem';
import { getCartItems } from '../slieces/cartSlice';
import { useGetCart } from '../features/cart/useGetCart';
import Loader from './Loader';

function CartContainer() {
  // const cart = useSelector(getCartItems);
  const { cart, isLoading } = useGetCart();
  console.log(cart);
  if (isLoading) return <Loader />;
  return (
    <div className=" w-[500px]">
      <NumCartItem num={cart.cartItems.length} />
      <ContainerCartItems cart={cart.cartItems} />
      <CartTotal isCartHaveItems={Boolean(cart.cartItems.length)} totalPrice={cart.totalCartPrice} />
    </div>
  );
}

export default CartContainer;
