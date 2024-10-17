import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function AppLayout() {
  return (
    <div className="h-dvh overflow-x-hidden grid grid-rows-[auto_1fr_auto] ">
      <Header />
      <main className="w-[1200px] mx-auto  space-y-12 px-4 mb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default AppLayout;
