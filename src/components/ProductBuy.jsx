import { CiDiscount1 } from 'react-icons/ci';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, getCartItems } from '../slieces/cartSlice';
import { calculateDiscount } from '../helps/helps';
import { useAddCart } from '../features/cart/useAddCart';
import { useEffect, useRef } from 'react';

function ProductBuy({ discount, priceAfterDiscount, price, product }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCartItems);
  const { addToCart, isPending } = useAddCart();
  console.log(isPending);

  const isProductInCart = Boolean(cart.find((item) => product['_id'] === item['_id']));
  return (
    <div className="p-6 space-y-10">
      <div className="flex justify-between">
        <div className="space-y-3">
          <h2 className="font-medium text-xl"> {discount ? calculateDiscount(price, discount) : price}$</h2>
          {discount && <p className="text-gray-717171">last price {price}$</p>}
        </div>
        {discount && (
          <div className="text-secondary-main font-medium text-lg  flex gap-2 items-center">
            <CiDiscount1 className="text-2xl" />
            {discount}
          </div>
        )}
      </div>
      {isProductInCart ? (
        <Button
          onClick={() => {
            dispatch(deleteItem(product['_id']));
          }}
          className={'  w-full  rounded-lg text-white bg-secondary-main px-4 py-2'}
        >
          Remove from Cart
        </Button>
      ) : (
        <Button
          disabled={isPending}
          onClick={() => {
            addToCart({ product: product['_id'] });
            // dispatch(addItem(product));
          }}
          className={`w-full  rounded-lg text-white  px-4 py-2  bg-primary-main disabled:bg-gray-505050 disabled:cursor-not-allowed`}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}

export default ProductBuy;
