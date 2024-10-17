import { Fragment } from 'react';
import HomeCategries from '../components/HomeCategries';
import HomeHeader from '../components/HomeHeader';
import HomeProductOnSale from '../components/HomeProductOnSale';
import HomeSection from '../components/HomeSection';
import NewProducts from '../components/NewProducts';
import SmartWatchSection from '../components/SmartWatchSection';
import TopBrands from '../components/TopBrands';

function Home() {
  return (
    <div className=" w-full  space-y-6">
      <HomeHeader />
      <HomeCategries />
      <HomeProductOnSale />
      <HomeSection label="New Products">
        <NewProducts />
      </HomeSection>
      <HomeSection label="Best Sellers">
        <NewProducts />
      </HomeSection>
      <HomeSection label="Top Brands">
        <TopBrands />
      </HomeSection>
      <SmartWatchSection />
    </div>
  );
}

export default Home;
