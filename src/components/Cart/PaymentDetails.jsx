import { useContext } from 'react';
import Button from '../Button';
import { useCart } from './Cart';
import OrderDetails from './OrderDetails';
function PaymentDetails() {
  const { setStep } = useCart();
  return (
    <>
      <h1 className="text-xl font-bold"> Payment Details</h1>
      <OrderDetails />
      <Button className={'py-4 w-full rounded-md text-white bg-blue-600'} onClick={() => setStep(1)}>
        Process To Checkout
      </Button>
    </>
  );
}
export default PaymentDetails;
