import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './Pages/Home';
import Account from './Pages/Account';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />}>
            <Route index element={<div>Personal Data</div>} />
            <Route path="orders" element={<div>Orders</div>} />
            <Route path="wishlist" element={<div>wishlist</div>} />
            <Route path="security" element={<div>security</div>} />
            <Route path="contactus" element={<div>Contact Us</div>} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
