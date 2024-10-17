import CounterItem from '../CounterItem';

function CartOrder({ order, type }) {
  const color = `bg-${order.color}-500`;
  return (
    <div className={`flex  gap-5 py-6 px-4 border shadow-md  ${type == 'inOrders' ? 'text-sm text-gray-500' : ''}`}>
      <div className="w-1/4">
        <img src="public/CategriesPhotos/laptop.png" className="max-w-full" />
      </div>
      <div className={`${type == 'norma' ? 'space-y-5' : ''} w-full`}>
        <h1 className="text-xl">{order.name}</h1>
        <div className="flex items-center gap-3"></div>

        <div className="flex items-center gap-3">
          {type === 'normal' && <img src="public/Cart/deliveryIcon.svg" alt="Delivary" />}
          <span>{order.delivery ? order.delivery : 'Free Delivary'}</span>
        </div>

        <div className="flex items-center gap-3">
          {type === 'normal' && <img src="public/Cart/StockIcon.svg" alt="Stock" />}
          <span>{order.stock ? 'In Stock' : 'Out of Stock'}</span>
        </div>
        <div className="flex justify-between">
          <div className={`space-x-3 ${type === 'inOrders' ? 'ml-auto' : ''}`}>
            <del className="text-gray-500">${order.price}</del>
            <span className="font-bold">${order.priceAfterDiscount}</span>
          </div>

          <CounterItem id={order['_id']} count={order.quantity} />
        </div>
      </div>
    </div>
  );
}
export default CartOrder;
