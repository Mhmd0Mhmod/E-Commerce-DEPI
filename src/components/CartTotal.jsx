import { RiShoppingCart2Line } from 'react-icons/ri';
import Button from './Button';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../slieces/cartSlice';

function CartTotal() {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex flex-col items-center">
        <span>Grand total</span>
        <span className="font-bold">${totalPrice}</span>
      </div>
      <div className="w-3/4">
        <Button className="flex items-center justify-center gap-2 py-4 rounded-lg text-white   bg-primary-main cursor-pointer w-full">
          Proceed to Cart <RiShoppingCart2Line className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartTotal;
