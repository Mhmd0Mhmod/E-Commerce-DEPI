import { useForm } from 'react-hook-form';
import Button from '../Button';
import { useCart } from './Cart';
import Input from '../Input';
import { FaRegEdit } from 'react-icons/fa';
function UserData() {
  const { setStep } = useCart();
  const { register, handleSubmit, formState } = useForm();

  return (
    <>
      <div className="flex  gap-5 py-6 px-4 border shadow-md rounded-md">
        <form onSubmit={handleSubmit()} className="w-full space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">User</h2>
            <input type="text" className="p-2 w-full bg-gray-100 focus:outline-none" {...register('name')} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Ship to</h2>
            <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
              <input type="text" className="p-2 w-full bg-gray-100 focus:outline-none" {...register('shipTo')} />
              <FaRegEdit className="text-blue-500" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Ship Mehtod</h2>
            <div className="space-y-5">
              <div className="flex  p-4 bg-gray-100  rounded-xl space-x-5">
                <input type="radio" className=" bg-gray-100 focus:outline-none" {...register('shipMethod')} />
                <div className="w-full">
                  <h3 className="text-xl font-semibold">Free Shiping</h3>
                  <div className="flex justify-between">
                    <p className="text-gray-500">3-5 business days</p>
                    <p className="text-gray-500">Free</p>
                  </div>
                </div>
              </div>
              <div className="flex  p-4 bg-gray-100  rounded-xl space-x-5">
                <input type="radio" className=" bg-gray-100 focus:outline-none" {...register('shipMethod')} />

                <div className="w-full">
                  <h3 className="text-xl font-semibold">Express</h3>
                  <div className="flex justify-between">
                    <p className="text-gray-500">1-2 business days</p>
                    <p className="text-gray-500">$5.00</p>
                  </div>
                </div>
              </div>
              <div className="flex  p-4 bg-gray-100  rounded-xl space-x-5">
                <input type="radio" className=" bg-gray-100 focus:outline-none" {...register('shipMethod')} />
                <div className="w-full">
                  <h3 className="text-xl font-semibold">Overnight</h3>
                  <div className="flex justify-between">
                    <p className="text-gray-500">Next business day</p>
                    <p className="text-gray-500">$10.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Button className={'text-blue-500 underline'} onClick={() => setStep(-1)}>
        Return to Cart
      </Button>
    </>
  );
}
export default UserData;
