import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/BreadCrumb';
import AccountAside from '../components/AccountAside';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import Cookies from 'js-cookie';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
function Account() {
  const user = useAuthUser();
  const header = useAuthHeader();
  console.log(user, header);

  return (
    <div className="p-4 space-y-4 min-h-[90lvh]">
      <Breadcrumb />
      <main className="flex gap-5  ">
        <AccountAside />
        <main className="flex-grow">
          <Outlet />
        </main>
      </main>
    </div>
  );
}
export default Account;
