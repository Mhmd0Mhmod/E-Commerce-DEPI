import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/BreadCrumb';
import AccountAside from '../components/AccountAside';
function Account() {
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
