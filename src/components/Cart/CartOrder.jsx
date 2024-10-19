import CounterItem from '../CounterItem';

function CartOrder({ order, type }) {
  return (
    <div className={`flex  gap-5 py-6 px-4 border shadow-md  ${type == 'inOrders' ? 'text-sm text-gray-500' : ''}`}>
      <div className="w-1/4">
        <img src={order.product.image} className="max-w-full" />
      </div>
      <div className={`${type == 'norma' ? 'space-y-5' : ''} w-full`}>
        <h1 className="text-xl font-bold">{order.product.name}</h1>
        <div className="flex items-center gap-3"></div>

        <div className="flex items-center gap-3">
          {type === 'normal' && <img src="public/Cart/deliveryIcon.svg" alt="Delivary" />}
          <span>{order.delivery ? order.delivery : 'Free Delivary'}</span>
        </div>

        <div className="flex items-center gap-3">
          {type === 'normal' && <img src="public/Cart/StockIcon.svg" alt="Stock" />}
          <span>{order.stock ? 'In Stock' : 'Out of Stock'}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className={`space-x-3 ${type === 'inOrders' ? '' : ''}`}>
            <span className="font-bold">${order.price}</span>
          </div>

          <CounterItem product={order.id} id={order.product.id} count={order.quantity} />
        </div>
      </div>
    </div>
  );
}
export default CartOrder;
