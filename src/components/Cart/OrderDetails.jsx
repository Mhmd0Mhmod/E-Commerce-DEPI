import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../slieces/cartSlice';

function OrderDetails() {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <>
      <div className="flex justify-between">
        <p>Grand Total</p>
        <span>${totalPrice}</span>
      </div>
    </>
  );
}
export default OrderDetails;
