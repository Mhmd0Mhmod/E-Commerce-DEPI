import { useGetCart } from '../../features/cart/useGetCart';
import Loader from '../Loader';

function OrderDetails() {
  const { cart, isLoading } = useGetCart();
  if (isLoading) return <Loader />;
  return (
    <>
      <div className="flex justify-between">
        <p>Grand Total</p>
        <span>${cart.totalCartPrice}</span>
      </div>
    </>
  );
}
export default OrderDetails;
