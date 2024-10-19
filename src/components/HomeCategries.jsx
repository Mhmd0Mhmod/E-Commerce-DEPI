import HomeCategriesItem from './HomeCategriesItem';

function HomeCategries() {
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-responsive md:gap-6 w-full ">
      <HomeCategriesItem image={'/public/CategriesPhotos/smart phone.png'} title="smart phone" />
      <HomeCategriesItem image={'/public/CategriesPhotos/laptop.png'} title="laptop" />
      <HomeCategriesItem image={'/public/CategriesPhotos/gaming.png'} title="gaming" />
      {/* <HomeCategriesItem image={'/public/CategriesPhotos/smart watch.png'} title="smart watch" /> */}
    </div>
  );
}

export default HomeCategries;
