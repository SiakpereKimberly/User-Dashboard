'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
type SignInForm = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  const onSubmit = (data: SignInForm) => {
    console.log('Form submitted:', data);
    alert('Login successful!');
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className='flex min-h-screen'>
      <section className='w-145 bg-[#211100] px-10 py-8 flex text-[#FFF0D9] font-Roboto'>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div className='flex items-center mb-8'>
              <Image
                src='/logo.png'
                alt='Anchor Logo'
                width={300}
                height={300}
                className='object-contain bg-[#211100] justify-center items-center'
              />
            </div>
            <h2 className='max-w-122  text-5xl font-bold font-Roboto text-[#FFDCB6]'>
              Transparent Fund Control.
            </h2>
            <p className='max-w-122 text-base mb-7 font-Roboto text-[#FFFFFF]'>
              Get full visibility into contributions and investments, while
              ensuring compliance and peace of mind for your members.
            </p>
          </div>
          <p className='max-w-122 text-xs text-[#939393] font-Roboto'>
            © Anchor is provided by VFD Microfinance Bank Limited - an entity
            licensed by the Central Bank of Nigeria, in collaboration with VFD
            Tech.
          </p>
        </div>
      </section>
      <section className='relative w-225 bg-[#FFFFFF] flex justify-center items-center'>
        <div className='absolute top-7 right-4 text-sm font-Roboto text-[#212121]'>
          <span className='mr-2'>Can’t login?</span>
          <Link
            href='/help-center'
            className='text-[#E2943E] font-bold underline'
          >
            Help center
          </Link>
        </div>
        <div className='w-full max-w-107'>
          <h1 className='text-4xl font-bold text-[#211100] font-Roboto'>
            Sign in
          </h1>
          <p className='text-[#646464] font-Roboto text-sm'>
            Let’s continue from where you stopped.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-8'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-[#212121] font-Roboto mb-2'
              >
                Email address
              </label>
              <input
                type='email'
                id='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                className='w-full border border-[#EEEEEE] text-[#939393] px-2 py-2'
                placeholder='Enter email'
              />
              {errors.email && (
                <p className='mt-1 text-red-500 text-xs'>
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div className='mt-4'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-[#212121] font-Roboto mb-2'
              >
                Password
              </label>

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  {...register('password', {
                    required: 'Password is required',
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        'Password must be at least 8 characters long and contain both letters and numbers',
                    },
                  })}
                  className='w-full border border-[#EEEEEE] text-[#939393] px-2 py-2 pr-10'
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 flex items-center pr-3 text-[#211100]'
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className='mt-1 text-red-500 text-xs'>
                  {errors.password.message?.toString()}
                </p>
              )}
            </div>

            <div className='mt-6'>
              <Link
                href='/password'
                className='text-[#211100] font-bold underline font-Roboto text-sm'
              >
                Reset password
              </Link>
            </div>
            <button
              type='submit'
              className='mt-6 w-full bg-[#E2943E] text-white py-2 px-4 rounded font-Roboto font-bold'
            >
              Login
            </button>
          </form>
          <div className='mt-10 justify-center flex gap-4'>
            <Link
              href='/privacy-policy'
              className='text-[#211100] font-bold underline font-Roboto text-sm'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms-of-service'
              className='text-[#211100] font-bold underline font-Roboto text-sm'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
