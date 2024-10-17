import { FiPlus } from 'react-icons/fi';
import { GoDash } from 'react-icons/go';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decreaseNumItem, deleteItem, increaseNumItem } from '../slieces/cartSlice';

function CounterItem({ count, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 ">
      <MdDeleteForever onClick={() => dispatch(deleteItem(id))} className="text-status-error text-2xl" />
      <div className="flex items-center gap-2 px-[6px] py-1 text-gray-717171 border-b-2 border-gray-717171">
        <button onClick={() => dispatch(decreaseNumItem(id))}>
          <GoDash className="text-xl" />
        </button>
        <span className="font-bold">{count}</span>
        <button onClick={() => dispatch(increaseNumItem(id))}>
          <FiPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default CounterItem;
