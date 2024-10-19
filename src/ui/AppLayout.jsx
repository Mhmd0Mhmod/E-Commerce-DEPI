import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useAuth } from '../Context/AuthProvider';

function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="h-dvh overflow-x-scroll grid grid-rows-[auto_1fr_auto] ">
      <Header />
      <main className="max-w-7xl mx-auto  space-y-12 px-4 mb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default AppLayout;
