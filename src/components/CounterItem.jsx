import { FiPlus } from 'react-icons/fi';
import { GoDash } from 'react-icons/go';
import { MdDeleteForever } from 'react-icons/md';
import { useEditCart } from '../features/cart/useEditCart';
import { useRemoveCart } from '../features/cart/useRemoveCart';
import Loader from './Loader';

function CounterItem({ count, id, product }) {
  const { removeFromCart, isPending: isPendingRemove } = useRemoveCart();
  const { editInCart, isPending: isPendingEdit } = useEditCart();
  if (isPendingRemove || isPendingEdit) return <Loader />;
  return (
    <div className="flex items-center gap-2 ">
      <MdDeleteForever onClick={() => removeFromCart(id)} className="text-status-error text-2xl cursor-pointer" />
      <div className="flex items-center gap-2 px-[6px] py-1 text-gray-717171 border-b-2 border-gray-717171">
        <button onClick={() => editInCart({ product, quantity: count - 1 })}>
          <GoDash className="text-xl" />
        </button>
        <span className="font-bold">{count}</span>
        <button onClick={() => editInCart({ product, quantity: count + 1 })}>
          <FiPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default CounterItem;
