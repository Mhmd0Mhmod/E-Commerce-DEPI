import { PiKey } from 'react-icons/pi';
import Input from './Input';
import { MdOutlineMailOutline } from 'react-icons/md';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { login } from '../apis/Registration';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import toast from 'react-hot-toast';
import { useState } from 'react';
function LoginForm({ hidden }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const signIn = useSignIn();
  const [loading, setLoading] = useState(false);
  function submit(data) {
    setLoading(true);
    login(data)
      .then((res) => {
        if (res) {
          console.log(res);

          const signInResult = signIn({
            auth: {
              token: res.token,
              type: 'Bearer',
            },
            refresh: res?.refreshToken,
            userState: res.user,
          });

          if (signInResult) {
            toast.success('Login Successfully');
            console.log('Sign-in successful');
          } else {
            console.error('Sign-in failed');
          }
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        toast.error('Login failed');
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className={`w-full ${!hidden && 'hidden'} `}>
      <h1 className="text-center text-3xl font-medium mb-6">Log in to Tech Heim</h1>
      <form className="space-y-3  " onSubmit={handleSubmit(submit)}>
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
          })}
          error={errors?.password?.message}
        />
        <div className="flex justify-end">
          <p className=" text-primary-main text-sm cursor-pointer">Forgot Password ?</p>
        </div>
        <Button
          disabled={loading}
          className="bg-primary-main w-full text-white p-2 rounded-lg flex justify-center items-center cursor-pointer disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
          Log in
        </Button>
        <div className="flex justify-center">
          <p className="flex gap-2 text-gray-717171">
            Don&apos;t have an account?
            <span className="text-primary-main cursor-pointer">sign up </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
