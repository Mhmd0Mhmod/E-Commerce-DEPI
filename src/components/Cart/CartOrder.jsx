function CartOrder({ order, type }) {
  const color = `bg-${order.color}-500`;
  return (
    <div className={`flex  gap-5 py-6 px-4 border shadow-md  ${type == 'inOrders' ? 'text-sm text-gray-500' : ''}`}>
      <div className="w-1/4">
        <img src="public/CategriesPhotos/laptop.png" className="max-w-full" />
      </div>
      <div className={`${type == 'norma' ? 'space-y-5' : ''} w-full`}>
        <h1 className="text-xl">{order.name}</h1>
        <div className="flex items-center gap-3">
          {type === 'normal' && <span className={`${color}  rounded-full border w-5 h-5 block`}></span>}
          <span>{order.color}</span>
        </div>

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
            <span>${order.price}</span>
          </div>
          {type === 'normal' && (
            <div className="flex gap-4 items-center">
              <img src="public/Cart/TrashIcon.svg" alt="Delete" />

              <div className="space-x-5 border-b-2 pb-2 text-xl text-gray-500 font-light">
                <button>-</button>
                <span>{order.quantity}</span>
                <button>+</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default CartOrder;
