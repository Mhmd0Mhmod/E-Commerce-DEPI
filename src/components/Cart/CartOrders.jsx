import { useSelector } from 'react-redux';
import CartOrder from './CartOrder';
import { getCartItems } from '../../slieces/cartSlice';
CartOrders.defaultProps = {
  type: 'normal',
};
function CartOrders({ type }) {
  const cart = useSelector(getCartItems);
  return cart.map((order) => <CartOrder order={order} type={type} key={order['_id']} />);
}
export default CartOrders;
