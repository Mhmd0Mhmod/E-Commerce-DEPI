import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { calculateDiscount } from '../helps/helps';
/*src={product.image}} alt="" */
function ItemProduct({ product }) {
  const navigate = useNavigate();
  return (
    <div className=" relative  overflow-hidden md:md:flex-grow space-y-4 shadow-lg p-4 rounded-lg cursor-pointer group" onClick={() => navigate(`/products/${product['_id']}`)}>
      <div className="absolute top-4 left-0 bg-secondary-100 px-1 py-1 text-secondary-main rounded-r-lg text-sm ">{product.discount}%</div>
      <div className=" h-48  border-b-2 border-gray-9E9E9E overflow-hidden  flex justify-center  ">
        <img className=" h-full object-cover " src={product.imageCover} />
      </div>
      <div className="space-y-4">
        <p className="group-hover:text-primary-500 transition-colors font-medium ">{product.name}</p>
        <div className={`flex justify-between items-center ${product.discount ? 'justify-between' : 'justify-end'}`}>
          <p className={`${product.discount ? 'text-gray-505050 line-through' : 'text-primary-main text-xl font-bold'}`}>${product.price}</p>
          {product.discount && <p className="text-primary-main text-xl font-bold"> $ {calculateDiscount(product.price, product.discount)}</p>}
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
