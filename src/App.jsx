import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './Pages/Home';
import Account from './Pages/Account';
import PersonalData from './Pages/PersonalData';
import Orders from './Pages/Orders';
import AccountSecurity from './Pages/AccountSecurity';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={'home'} />} />
          <Route index path="home" element={<Home />} />
          <Route path="account" element={<Account />}>
            <Route index element={<Navigate replace to={'personalData'} />} />
            <Route path="personalData" element={<PersonalData />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<div>wishlist</div>} />
            <Route path="security" element={<AccountSecurity />} />
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
