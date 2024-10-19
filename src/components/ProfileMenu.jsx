import { BsHandbag } from 'react-icons/bs';
import { FaRegCircleUser } from 'react-icons/fa6';
import { HiOutlineLogin } from 'react-icons/hi';
import ProfileMenuItem from './ProfileMenuItem';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useAuth } from '../Context/AuthProvider';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import toast from 'react-hot-toast';

function ProfileMenu() {
  const user = useAuthUser();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const signOut = useSignOut();
  const handleLogout = () => {
    signOut();
    setIsAuthenticated(false);
    toast.success('Sign out successfully');
  };

  return (
    <div className="space-y-4">
      <ProfileMenuItem icon={<FaRegCircleUser />}>
        <p className="text-primary-main text-lg ">{user.name}</p>
        <p className="text-sm">{user.email}</p>
      </ProfileMenuItem>
      <ProfileMenuItem icon={<BsHandbag />}>Orders </ProfileMenuItem>
      <ProfileMenuItem icon={<HiOutlineLogin />} onClick={handleLogout} className={'text-red-500'}>
        log out{' '}
      </ProfileMenuItem>
    </div>
  );
}

export default ProfileMenu;
