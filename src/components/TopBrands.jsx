import TopBrandItem from "./TopBrandItem";

function TopBrands() {
  return (
    <div className="grid grid-rows-[100px] grid-cols-responsive justify-between items-center gap-7 mt-11">
      <TopBrandItem image="../../public/homePhotos/Vector-3.png" />
      <TopBrandItem image="../../public/homePhotos/Vector.png" />
      <TopBrandItem image="../../public/homePhotos/Vector-1.png" />
      <TopBrandItem image="../../public/homePhotos/Vector-2.png" />
      <TopBrandItem image="../../public/homePhotos/g3.png" />
      <TopBrandItem image="../../public/homePhotos/logo-red.png" />
    </div>
  );
}

export default TopBrands;
