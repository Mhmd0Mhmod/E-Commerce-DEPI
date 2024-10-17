function ItemProductInSale({ image, price, newPrice, discount }) {
  return (
    <div className="bg-white py-3 px-2 rounded space-y-2 cursor-pointer relative pt-4 min-w-36">
      <div className="absolute top-2 left-0 bg-secondary-100 px-1 py-1 text-secondary-main rounded-r-lg text-sm ">{discount}%</div>
      <div className=" w-full">
        <img className=" w-full" src={image} alt="" />
      </div>
      <p className="text-xs font-bold">Logitech G502 Gaming Mouse</p>
      <div className="flex justify-between items-center ">
        <span className="text-gray-717171 line-through text-sm ">${price}</span>
        <span className="text-black text-base font-semibold">${newPrice}</span>
      </div>
    </div>
  );
}

export default ItemProductInSale;
