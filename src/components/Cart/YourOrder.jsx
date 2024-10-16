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
      <Button className={'py-4 w-full rounded-md text-white bg-blue-600'} onClick={() => setStep(1)}>
        Continue To Payment
      </Button>
    </>
  );
}
export default YourOrder;
