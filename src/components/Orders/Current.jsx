import { useState } from 'react';
import ZeroOrders from '/public/AccountPagesPhotos/0 Receipt.svg';
import Order from './Order';

function Current() {
  const [orders, setOrders] = useState([]);
  return (
    <div>
      {orders.length > 0 && orders.map((order) => <Order key={order} order={order} />)}
      {orders.length === 0 && <img src={ZeroOrders} alt="Zero Orders" className="m-auto" />}
    </div>
  );
}
export default Current;
