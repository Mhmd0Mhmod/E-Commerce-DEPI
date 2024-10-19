import { FaRegUser } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { RiShoppingCart2Line } from 'react-icons/ri';
import Modal from './Modal';
import SearchBar from './SearchBar';
import SmallModal from './SmallModal';
import ProfileMenu from './ProfileMenu';
import CartContainer from './CartContainer';
import Button from './Button';
import LoginSignContainer from './LoginSignContainer';
import { IoLogOutOutline } from 'react-icons/io5';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useEffect } from 'react';
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

function IconBar() {
  const user = useAuthUser();
  const signOut = useSignOut();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  function handleSigOut() {
    signOut();
    setIsAuthenticated(false);
    toast.success('Sign out successfully');
  }
  return (
    <ul className="flex items-center space-x-2 sm:space-x-4 text-xl order-3">
      <Modal>
        <Modal.Open opens="search">
          <li className="cursor-pointer">
            <IoIosSearch className="text-2xl" />
          </li>
        </Modal.Open>
        <Modal.Window name="search">
          <div>
            <SearchBar />
          </div>
        </Modal.Window>
      </Modal>
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
      {!isAuthenticated && (
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
      )}
      {isAuthenticated && (
        <Button className={'bg-primary-main px-4 py-2 hidden gap-5 items-center text-white cursor-pointer rounded-lg md:flex'} onClick={handleSigOut}>
          <IoLogOutOutline /> log out
        </Button>
      )}
    </ul>
  );
}

export default IconBar;
