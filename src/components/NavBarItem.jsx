import { NavLink } from 'react-router-dom';

function NavBarItem({ children, to }) {
  return (
    <NavLink to={to} className="relative text-lg font-light border-0  group  cursor-pointer">
      {children}
      <div className="absolute -bottom-1 left-0 h-[2px] bg-primary-500   group-hover:w-full "> </div>
    </NavLink>
  );
}

export default NavBarItem;
