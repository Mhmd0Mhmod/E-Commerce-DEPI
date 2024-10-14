import { Link, useLocation } from 'react-router-dom';
import { HiOutlineUser, HiOutlineHeart, HiShieldCheck, HiOutlineEnvelopeOpen, HiMiniArrowLeftEndOnRectangle } from 'react-icons/hi2';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function AccountAside() {
  const location = useLocation();
  const active = location.pathname.split('/').at(-1);
  const navItems = [
    { path: 'personalData', label: 'Personal Data', icon: <HiOutlineUser /> },
    { path: 'orders', label: 'Orders', icon: <HiOutlineShoppingCart /> },
    { path: 'wishlist', label: 'Wishlist', icon: <HiOutlineHeart /> },
    { path: 'security', label: 'Security', icon: <HiShieldCheck /> },
    { path: 'contactus', label: 'Contact Us', icon: <HiOutlineEnvelopeOpen /> },
  ];

  return (
    <aside className="bg-gray-50 rounded-md self-stretch ">
      <ul className="space-y-2 text-xl">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={`/account/${item.path}`} className={`p-4 flex gap-3 items-center ${active === item.path ? 'text-blue-500' : 'text-gray-600'}`}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
        <li className={` p-4 flex gap-3 items-center text-secondary-300`}>
          <HiMiniArrowLeftEndOnRectangle />
          <span>Logout</span>
        </li>
      </ul>
    </aside>
  );
}
export default AccountAside;
