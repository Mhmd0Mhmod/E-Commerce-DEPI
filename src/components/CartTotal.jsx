import { RiShoppingCart2Line } from 'react-icons/ri';
import Button from './Button';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../slieces/cartSlice';
import { useNavigate } from 'react-router-dom';

function CartTotal({ isCartHaveItems, totalPrice }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex flex-col items-center">
        <span>Grand total</span>
        <span className="font-bold">${totalPrice}</span>
      </div>
      <div className="w-3/4">
        <Button
          disabled={!isCartHaveItems}
          onClick={() => {
            if (isCartHaveItems) {
              navigate('/cart');
            }
          }}
          className=" flex items-center justify-center gap-2 py-4 rounded-lg text-white   bg-primary-main cursor-pointer w-full  disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Proceed to Cart <RiShoppingCart2Line className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}

export default CartTotal;
