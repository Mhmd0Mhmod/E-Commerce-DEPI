import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <ul className="hidden items-center space-x-14 order-2 sm:flex">
      <NavBarItem>Home</NavBarItem>
      <NavBarItem>Products</NavBarItem>
      <NavBarItem>Blog</NavBarItem>
      <NavBarItem>FAQ</NavBarItem>
      <NavBarItem>Contact Us</NavBarItem>
    </ul>
  );
}

export default NavBar;
