import { IoLogOutOutline } from 'react-icons/io5';
import Button from './Button';
import Modal from './Modal';
import NavBarItem from './NavBarItem';
import LoginSignContainer from './LoginSignContainer';

function SideNavBar() {
  return (
    <ul className="flex flex-col divide-y-2 ">
      <NavBarItem to={'home'}>Home</NavBarItem>
      <NavBarItem to={'products'}>Products</NavBarItem>
      <NavBarItem to={'account'}>account</NavBarItem>
      <Modal>
        <Modal.Open opens="loginForm">
          <Button className={'bg-primary-main px-4 py-2 flex justify-center items-center text-white cursor-pointer rounded-lg md:hidden'}>
            {' '}
            <IoLogOutOutline /> log in{' '}
          </Button>
        </Modal.Open>
        <Modal.Window name="loginForm">
          <LoginSignContainer />
        </Modal.Window>
      </Modal>
    </ul>
  );
}

export default SideNavBar;
