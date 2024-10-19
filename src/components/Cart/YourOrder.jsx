import Button from '../Button';
import { useCart } from './Cart';
import CartOrders from './CartOrders';
import OrderDetails from './OrderDetails';

function YourOrder() {
  const { setStep } = useCart();
  return (
    <>
      <h1 className="text-xl font-bold"> Your Order</h1>
      <CartOrders type={'inOrders'} />
      <OrderDetails />
    </>
  );
}
export default YourOrder;
