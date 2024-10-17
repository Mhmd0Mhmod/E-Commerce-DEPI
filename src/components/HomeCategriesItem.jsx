/* eslint-disable react/prop-types */
function HomeCategriesItem({ image, title }) {
  return (
    <div className="flex  w-full flex-col items-center shadow-xl rounded-lg px-4 py-2 cursor-pointer">
      <div className=" h-16">
        <img className=" h-full aspect-square" src={image} alt="" />
      </div>

      <p className="text-gray-2D2D2D font-light">{title}</p>
    </div>
  );
}

export default HomeCategriesItem;
