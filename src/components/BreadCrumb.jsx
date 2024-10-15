import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const items = ['home', ...location.pathname.split('/').filter((item) => item !== '')];

  return (
    <ul className="flex gap-2">
      {items.map((item, index, items) => (
        <li key={index} className={`${index === items.length - 1 ? 'text-blue-500 underline' : 'text-gray-600'}`}>
          {index === items.length - 1 ? (
            item[0].toUpperCase() + item.slice(1)
          ) : (
            <>
              <Link to={`/${item}`}>{item[0].toUpperCase() + item.slice(1)}</Link>
              <span> {'>'} </span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
