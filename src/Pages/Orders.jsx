import { useState } from 'react';
import Current from '../components/Orders/Current';
import Delivered from '../components/Orders/Delivered';
import Canceled from '../components/Orders/Canceled';
import Returned from '../components/Orders/Returned';

function Orders() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="space-y-5">
      <h1 className="text-xl">Order History</h1>
      <p className="text-gray-500">Track , return or purchase item </p>
      <ul className="flex gap-7">
        {['Current', 'Delivered', 'Canceled', 'Returned'].map((item, idx) => (
          <li key={idx} onClick={() => setActiveTab(idx + 1)} className={`${activeTab === idx + 1 ? 'text-blue-600' : ''} cursor-pointer`}>
            {item}
          </li>
        ))}
      </ul>
      <hr />
      {activeTab === 1 && <Current />}
      {activeTab === 2 && <Delivered />}
      {activeTab === 3 && <Canceled />}
      {activeTab === 4 && <Returned />}
    </div>
  );
}
export default Orders;
