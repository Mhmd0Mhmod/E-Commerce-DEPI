import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function AppLayout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto  space-y-12 px-4 mb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default AppLayout;
