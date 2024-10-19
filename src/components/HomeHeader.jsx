import { useNavigate } from 'react-router-dom';
import Button from './Button';

function HomeHeader() {
  const navigate = useNavigate();
  return (
    <div className="  md:py-14 h-[157px] md:h-[400px]  relative mt-6 md:mt-16 ">
      <div className="w-1/2 flex flex-col justify-between h-full  ">
        <h1 className="text-primary-700  text-2xl font-semibold md:text-6xl">Tech Heim</h1>
        <p className="text-primary-700 text-[9px] font-medium md:text-4xl">
          &quot;Join the <span className="text-secondary-main">digital revolution&quot;</span>
        </p>
        <Button className={`px-2 py-1 md:px-4  md:py-3 text-center bg-secondary-main rounded-lg text-white md:w-2/4 cursor-pointer`} onClick={() => navigate('/products')}>
          Explore More
        </Button>
      </div>
      <div className="absolute h-full w-1/2 top-0 right-0">
        <img className="h-full w-full object-contain" src="./public/homePhotos/homebg.png" alt="" />
      </div>
    </div>
  );
}

export default HomeHeader;
