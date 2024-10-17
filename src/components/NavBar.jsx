import NavBarItem from './NavBarItem';

function NavBar() {
  return (
    <ul className="hidden items-center space-x-14 order-2 sm:flex">
      <NavBarItem to={'home'}>Home</NavBarItem>
      <NavBarItem to={'products'}>Products</NavBarItem>
      <NavBarItem to={'account'}>account</NavBarItem>
    </ul>
  );
}

export default NavBar;
