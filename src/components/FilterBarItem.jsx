import { cloneElement } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterBarItem({ icon, title, onClick }) {
  const [searchParams] = useSearchParams();

  return (
    <button className={`flex flex-col items-center px-2 py-2 ${searchParams.get('filter') === title && 'border-b-4 border-b-primary-main'}`} onClick={onClick}>
      {cloneElement(icon, { className: 'text-4xl mb-4' })}
      <p className="capitalize text-xl">{title}</p>
    </button>
  );
}

export default FilterBarItem;
