import { useForm } from 'react-hook-form';
import { useCheckOut } from '../../features/order/useCheckOut';
import Button from '../Button';
import Input from '../Input';
import { useCart } from './Cart';
function UserData() {
  const { setStep } = useCart();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { checkOut, isPending } = useCheckOut();
  function submit(data) {
    checkOut(data);
  }
  return (
    <>
      <div className="flex  gap-5 py-6 px-4 border shadow-md rounded-md">
        <form onSubmit={handleSubmit(submit)} className="w-full space-y-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">User</h2>
            <Input disabled={isPending} error={errors?.name?.message} placeholder={'Username'} register={register('name', { required: 'This Field Required' })} />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Ship to</h2>
            <Input disabled={isPending} error={errors?.city?.message} placeholder={'City'} register={register('city', { required: 'This Field Required' })} />
            <Input disabled={isPending} error={errors?.street?.message} placeholder={'street'} register={register('street', { required: 'This Field Required' })} />
            <Input disabled={isPending} error={errors?.phone?.message} placeholder={'Your Phone'} register={register('phone', { required: 'This Field Required' })} />
            <Button className={'py-4 w-full rounded-md text-white bg-blue-600'}>Check Out</Button>
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
