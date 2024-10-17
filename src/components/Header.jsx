import { FaBars } from 'react-icons/fa';
import IconBar from './IconBar';
import Logo from './Logo';
import NavBar from './NavBar';
import SideModal from './SideModal';
import SideNavBar from './SideNavBar';

function Header() {
  return (
    <div className="border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center ">
        <SideModal>
          <SideModal.Open>
            <div className="order-1 text-xl sm:hidden">
              <FaBars />
            </div>
          </SideModal.Open>
          <SideModal.Window>
            <SideNavBar />
          </SideModal.Window>
        </SideModal>
        <Logo />
        <NavBar />
        <IconBar />
      </div>
    </div>
  );
}

export default Header;
