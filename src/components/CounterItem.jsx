import { FiPlus } from 'react-icons/fi';
import { GoDash } from 'react-icons/go';
import { MdDeleteForever } from 'react-icons/md';

function CounterItem({ count }) {
  return (
    <div className="flex items-center gap-2 ">
      <MdDeleteForever className="text-status-error text-2xl" />
      <div className="flex items-center gap-2 px-[6px] py-1 text-gray-717171 border-b-2 border-gray-717171">
        <button>
          <GoDash className="text-xl" />
        </button>
        <span className="font-bold">{count}</span>
        <button>
          <FiPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default CounterItem;
