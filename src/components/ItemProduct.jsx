import { FaStar } from "react-icons/fa";

function ItemProduct() {
  return (
    <div className=" space-y-4 shadow-lg p-4 rounded-lg cursor-pointer group">
      <div className="w-full h-48  border-b-2 border-gray-9E9E9E   ">
        <img
          className=" w-full h-full "
          src="../../public/CategriesPhotos/smart phone.png"
          alt=""
        />
      </div>
      <div className="space-y-4">
        <p className="group-hover:text-primary-500 transition-colors font-medium ">
          Iphone 14 promax 256 gig
        </p>
        <div className="flex justify-between">
          <p>$930.90</p>
          <p className="flex items-center gap-2 text-primary-500">
            <FaStar />
            <p className="font-medium">4.5</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
