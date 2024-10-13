import Button from "./Button";

function SmartWatchSection() {
  return (
    <div className="bg-[url('./public/homePhotos/smartWatchBanner.png')] bg-cover bg-no-repeat px-16 py-10 flex flex-col items-center rounded-lg  sm:flex-row">
      <div className="w-1/2 text-white  space-y-4 flex  flex-col items-center mb-7 sm:mb-0">
        <h3 className="text-6xl font-medium">SMART WATCH</h3>
        <p className="text-3xl font-light ">Various designs and brands</p>
        <Button className="bg-[#ff6851] text-[#223949] w-fit px-4 p-2 rounded-lg">
          view
        </Button>
      </div>
      <div className="w-1/2">
        <img
          className="w-full "
          src="./public/homePhotos/smartWatch.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SmartWatchSection;
