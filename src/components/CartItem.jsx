import CounterItem from "./CounterItem";

function CartItem({ image }) {
  return (
    <li className="flex  p-3 shadow-sm  shadow-gray-717171">
      <div className="w-1/2 flex justify-center items-center">
        <img className="w-1/2" src={image} alt={`${image}`} />
      </div>
      <div className="w-1/2 space-y-6">
        <h3 className="font-medium">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h3>
        <p className="text-sm text-gray-717171">×1</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-2D2D2D font-light">$433.00</span>
          <CounterItem />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
