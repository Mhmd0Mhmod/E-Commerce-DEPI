import { SlScreenSmartphone } from 'react-icons/sl';
import { BsLaptop, BsTabletLandscape, BsSmartwatch } from 'react-icons/bs';
import { TbDeviceAirpods } from 'react-icons/tb';
import { IoCameraOutline, IoChevronUpOutline } from 'react-icons/io5';
import { IoGameControllerOutline } from 'react-icons/io5';
import FilterBarItem from './FilterBarItem';
import { useSearchParams } from 'react-router-dom';

// className={activeFilter === 'phone' ? 'active' : ''}
function FilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChangeFilter(filterType) {
    searchParams.set('filter', filterType);

    setSearchParams(searchParams);
  }
  return (
    <div className="flex justify-center items-center gap-8">
      <FilterBarItem icon={<></>} title="all" onClick={() => handleChangeFilter('all')} />
      <FilterBarItem icon={<SlScreenSmartphone />} title="phone" onClick={() => handleChangeFilter('phones')} />
      <FilterBarItem icon={<BsLaptop />} title="Laptops" onClick={() => handleChangeFilter('Laptops')} />
      <FilterBarItem icon={<BsTabletLandscape />} title="tablet" onClick={() => handleChangeFilter('tablet')} />
    </div>
  );
}

export default FilterBar;
