import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './Pages/Home';
import Account from './Pages/Account';
import PersonalData from './Pages/PersonalData';
import Orders from './Pages/Orders';
import AccountSecurity from './Pages/AccountSecurity';
import WishList from './components/WishList';
import Cart from './components/Cart/Cart';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from 'react-auth-kit';
import { Toaster } from 'react-hot-toast';
import { store } from './apis/auth';
import { AuthProvider as CustomAuthProvider } from './Context/AuthProvider.jsx';
import PrivateRoute from './Context/PrivateRoutes.jsx';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider store={store}>
        <CustomAuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to={'home'} />} />
                <Route index path="home" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route index path="cart" element={<Cart />} />
                <Route
                  path="account"
                  element={
                    <PrivateRoute>
                      <Account />
                    </PrivateRoute>
                  }
                >
                  <Route index element={<Navigate replace to={'personalData'} />} />
                  <Route path="personalData" element={<PersonalData />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="wishlist" element={<WishList />} />
                  <Route path="security" element={<AccountSecurity />} />
                  <Route path="contactus" element={<div>Contact Us</div>} />
                  <Route path="*" element={<div>Not Found</div>} />
                </Route>
              </Route>
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </BrowserRouter>
        </CustomAuthProvider>
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
