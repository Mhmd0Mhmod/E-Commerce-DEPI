import ProductOnSaleContainer from './ProductOnSaleContainer';

function HomeProductOnSale() {
  return (
    <div className="bg-primary-500 px-8 py-9 pr-0 md:pr-8    rounded-lg flex  relative  gap-4  ">
      <div className=" text-white  w-full flex flex-col justify-between text-center">
        <img src="../../public/homePhotos/random-shape-in-blue-png 2.svg" className="absolute  top-0 left-0 " />
        <div className="space-y-2 text-nowrap">
          <h3 className="text-base  md:text-3xl font-medium">Products On Sale</h3>
          <p className="text-sm md:text-2xl font-light">Shop Now!</p>
        </div>
        <button className="text-2xl">View all &gt;</button>
      </div>
      <ProductOnSaleContainer />
    </div>
  );
}

export default HomeProductOnSale;
