import { useNavigate } from 'react-router-dom';
import HomeCategriesItem from './HomeCategriesItem';

function HomeCategries() {
  const navigate = useNavigate();
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-responsive md:gap-6 w-full ">
      <HomeCategriesItem image={'/public/CategriesPhotos/smart phone.png'} title="smart phone" onClick={() => navigate('/products?filter=phones')} />
      <HomeCategriesItem image={'/public/CategriesPhotos/laptop.png'} title="laptop" onClick={() => navigate('/products?filter=Laptops')} />
      <HomeCategriesItem image={'/public/pngtree-tablet-device-mockup-png-image_4530609.png'} title="tablet" onClick={() => navigate('/products?filter=tablet')} />
      {/* <HomeCategriesItem image={'/public/CategriesPhotos/smart watch.png'} title="smart watch" /> */}
    </div>
  );
}

export default HomeCategries;
