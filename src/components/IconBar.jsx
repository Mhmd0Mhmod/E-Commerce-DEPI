import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import toast from 'react-hot-toast';
import { FaRegUser } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { useAuth } from '../Context/AuthProvider';
import Button from './Button';
import CartContainer from './CartContainer';
import LoginSignContainer from './LoginSignContainer';
import Modal from './Modal';
import ProfileMenu from './ProfileMenu';
import SmallModal from './SmallModal';

function IconBar() {
  const user = useAuthUser();
  const signOut = useSignOut();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  function handleSigOut() {
    signOut();
    setIsAuthenticated(false);
    toast.success('Sign out successfully');
  }
  if (!isAuthenticated) {
    return (
      <ul className="flex items-center space-x-2 sm:space-x-4 text-xl order-3">
        <Modal>
          <Modal.Open opens="loginForm">
            <Button className={'bg-primary-main px-4 py-2 hidden gap-5 items-center text-white cursor-pointer rounded-lg md:flex'}>
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
  return (
    <ul className="flex items-center space-x-2 sm:space-x-4 text-xl order-3">
      <SmallModal>
        <SmallModal.Open opens="cart">
          <li className="cursor-pointer">
            <RiShoppingCart2Line />
          </li>
        </SmallModal.Open>
        <SmallModal.Window name="cart">
          <CartContainer />
        </SmallModal.Window>

        <SmallModal.Open opens="profile menu">
          <li className="cursor-pointer">
            <FaRegUser />
          </li>
        </SmallModal.Open>
        <SmallModal.Window name="profile menu">
          <ProfileMenu />
        </SmallModal.Window>
      </SmallModal>
    </ul>
  );
}

export default IconBar;
