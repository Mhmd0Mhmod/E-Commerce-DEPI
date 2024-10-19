import { useProduct } from '../features/products/useProduct';
import CounterItem from './CounterItem';
// src={product.image}
function CartItem({ product }) {
  return (
    <li className="flex  p-3 shadow-sm  shadow-gray-717171">
      <div className="w-1/2 flex justify-center items-center">
        <img className="w-1/2" src={product.product.image} alt={`${product.image}`} />
      </div>
      <div className="w-1/2 space-y-6">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-717171">×{product.quantity}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-2D2D2D font-light">${product.price * product.quantity}</span>
          <CounterItem id={product.product.id} product={product.product.id} count={product.quantity} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
