import { PiKey } from 'react-icons/pi';
import Input from './Input';
import { MdOutlineMailOutline } from 'react-icons/md';
import Button from './Button';
import { FaRegUser } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { signUp } from '../apis/Registration';
import toast from 'react-hot-toast';
import { useState } from 'react';

function SignUpForm({ hidden }) {
  const { register, handleSubmit, formState } = useForm();
  const [loading, setLoading] = useState(false);
  const { errors } = formState;
  function submit(data) {
    setLoading(true);
    signUp(data)
      .then((res) => {
        if (res) {
          toast.success(res.message);
        }
      })
      .finally(() => setLoading(false));
  }
  return (
    <div className={`w-full ${hidden && 'hidden'}`}>
      <h1 className="text-center text-3xl font-medium mb-6">Create your account</h1>
      <form className="space-y-3" onSubmit={handleSubmit(submit)}>
        <Input
          icon={<FaRegUser className="text-2xl text-gray-717171" />}
          placeholder="Full name"
          register={register('name', {
            required: 'this field is required',
          })}
          error={errors?.fullName?.message}
        />
        <Input
          icon={<MdOutlineMailOutline className="text-2xl text-gray-717171" />}
          placeholder="E-mail"
          register={register('email', { required: 'this field is required' })}
          error={errors?.email?.message}
        />
        <Input
          icon={<PiKey className="text-2xl text-gray-717171" />}
          placeholder="password"
          type="password"
          register={register('password', {
            required: 'this field is required',
            minLength: {
              value: 8,
              message: 'The word must be at least 8 letters long.',
            },
          })}
          error={errors?.password?.message}
        />

        <Button
          disabled={loading}
          className=" disabled:bg-gray-700 disabled:cursor-not-allowed bg-primary-main w-full text-white p-2 rounded-lg flex justify-center items-center cursor-pointer"
        >
          Sign Up
        </Button>
        <div className="flex justify-center">
          <p className="flex gap-2 text-gray-717171">
            Already have an account ?<span className="text-primary-main cursor-pointer">sign in </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
