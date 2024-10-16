import CartStep1 from '/public/Cart/Cart-Step1.svg';
import CartStep1Done from '/public/Cart/cart-Done.svg';
import CheckoutStep2 from '/public/Cart/Checkout-Step2.svg';
import CheckoutStep2Progess from '/public/Cart/Checkout-Step2-Progress.svg';
import CheckoutStep2Done from '/public/Cart/Checkout-Step2-Done.svg';
import PaymentStep3 from '/public/Cart/Payment-Step3.svg';
import PaymentStep3Progress from '/public/Cart/Payment-Step3-Progress.svg';
function CartStepsBar({ step }) {
  return (
    <div className="flex items-center justify-center">
      {step === 1 && <img src={CartStep1} alt="Cart Step 1" />}
      {step > 1 && <img src={CartStep1Done} alt="Cart Step 1 Done" />}

      {step < 2 && <img src={CheckoutStep2} alt="Checkout Step 2" />}
      {step === 2 && <img src={CheckoutStep2Progess} alt="Checkout Step 2 Progress" />}
      {step > 2 && <img src={CheckoutStep2Done} alt="Checkout Step 2 Done" />}

      {step < 3 && <img src={PaymentStep3} alt="Payment Step 3" />}
      {step === 3 && <img src={PaymentStep3Progress} alt="Payment Step 3 Progress" />}
    </div>
  );
}
export default CartStepsBar;
