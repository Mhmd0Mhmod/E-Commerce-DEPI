import HomeCategriesItem from "./HomeCategriesItem";

function HomeCategries() {
  return (
    <div className="flex md:grid md:grid-cols-6 md:gap-6 overflow-x-scroll">
      <HomeCategriesItem
        image={"/public/CategriesPhotos/accessories.png"}
        title="Accessories"
      />
      <HomeCategriesItem
        image={"/public/CategriesPhotos/camera.png"}
        title="Camera"
      />
      <HomeCategriesItem
        image={"/public/CategriesPhotos/laptop.png"}
        title="laptop"
      />
      <HomeCategriesItem
        image={"/public/CategriesPhotos/smart phone.png"}
        title="smart phone"
      />
      <HomeCategriesItem
        image={"/public/CategriesPhotos/gaming.png"}
        title="gaming"
      />
      <HomeCategriesItem
        image={"/public/CategriesPhotos/smart watch.png"}
        title="smart watch"
      />
    </div>
  );
}

export default HomeCategries;
