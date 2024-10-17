import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
/*src={product.image}} alt="" */
function ItemProduct({ product }) {
  const navigate = useNavigate();
  return (
    <div className="  overflow-hidden md:md:flex-grow space-y-4 shadow-lg p-4 rounded-lg cursor-pointer group" onClick={() => navigate(`/products/${product['_id']}`)}>
      <div className="w-full h-48  border-b-2 border-gray-9E9E9E   ">
        <img className=" w-full h-full " src="../../public/CategriesPhotos/camera.png" />
      </div>
      <div className="space-y-4">
        <p className="group-hover:text-primary-500 transition-colors font-medium ">{product.name}</p>
        <div className="flex justify-between">
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
