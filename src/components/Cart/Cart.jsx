import { createContext, useContext, useState } from 'react';
import CartStepsBar from './CartStepsBar';
import PaymentDetails from './PaymentDetails';
import CartOrders from './CartOrders';
import YourOrder from './YourOrder';
import UserData from './UserData';

const CartContext = createContext();
function Cart() {
  const [step, setstepMove] = useState(1);
  const setStep = (num) => {
    if (step + num > 3 || step + num < 1) return;
    setstepMove((step) => step + num);
  };
  return (
    <CartContext.Provider value={{ step, setStep }}>
      <div className="space-y-5 p-4">
        <CartStepsBar step={step} />
        <div className="flex justify-between gap-10">
          <div className="flex-grow space-y-5">
            {step === 1 && <CartOrders />}
            {step > 1 && <UserData />}
          </div>
          <div className="p-4 border shadow-md space-y-5 w-2/5 self-start">
            {step === 1 && <PaymentDetails />}
            {step > 1 && <YourOrder />}
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
export default Cart;
