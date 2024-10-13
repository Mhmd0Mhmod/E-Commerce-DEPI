import { FaBars } from "react-icons/fa";
import IconBar from "./IconBar";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center ">
        <div className="order-1 text-xl sm:hidden">
          <FaBars />
        </div>
        <Logo />
        <NavBar />
        <IconBar />
      </div>
    </div>
  );
}

export default Header;
