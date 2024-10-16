import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ItemProduct({ product }) {
  const navigate = useNavigate();
  return (
    <div className=" space-y-4 shadow-lg p-4 rounded-lg cursor-pointer group" onClick={() => navigate(`${product.id}`)}>
      <div className="w-full h-48  border-b-2 border-gray-9E9E9E   ">
        <img className=" w-full h-full " src={product.image} alt="" />
      </div>
      <div className="space-y-4">
        <p className="group-hover:text-primary-500 transition-colors font-medium ">{product.title}</p>
        <div className="flex justify-between">
          <p>${product.unitPrice}</p>
          <p className="flex items-center gap-2 text-primary-500">
            <FaStar />
            <p className="font-medium">{product.rate}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
