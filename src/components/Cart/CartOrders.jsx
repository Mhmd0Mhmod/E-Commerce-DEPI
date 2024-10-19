import { useSelector } from 'react-redux';
import CartOrder from './CartOrder';
import { getCartItems } from '../../slieces/cartSlice';
import { useGetCart } from '../../features/cart/useGetCart';
import Loader from '../Loader';
CartOrders.defaultProps = {
  type: 'normal',
};
function CartOrders({ type }) {
  const { cart, isLoading } = useGetCart();
  //  const cart = useSelector(getCartItems);
  if (isLoading) return <Loader />;
  return cart.cartItems.map((order) => <CartOrder order={order} type={type} key={order.product.id} />);
}
export default CartOrders;
