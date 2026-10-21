'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
type PasswordForm = {
  password: string;
};
export default function PasswordVerifyPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordForm>();
  const password = watch('password', '');
  const hasMinLength = password.length >= 8;

  const hasUppercase = /[A-Z]/.test(password);

  const hasLowercase = /[a-z]/.test(password);

  const hasNumber = /\d/.test(password);

  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
  const onSubmit = (data: PasswordForm) => {
    console.log('New password:', data);
  };
  const isPasswordValid =
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialCharacter;
  return (
    <main className='relative min-h-screen bg-[#FFFFFF]'>
      <div className='absolute top-0 left-0 h-1 w-full bg-[#E2943E]'></div>
      <header className='absolute top-0 right-0   flex justify-end px-10 py-7 '>
        <p className='text-sm text-[#212121] font-Roboto'>
          <span className='mr-4'>Already have an account?</span>

          <Link
            href='/signin'
            className='text-[#E2943E] text-decoration-line: underline font-Roboto'
          >
            Sign in
          </Link>
        </p>
      </header>
      <div className='flex justify-center pt-28'>
        <div className='w-full max-w-xl'>
          <h1 className='text-4xl font-bold text-[#211100]'>Reset password</h1>

          <p className='text-sm text-[#646464]'>Enter your new password.</p>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 font-Roboto'>
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
                  })}
                  className='w-full border border-[#EEEEEE] text-[#939393] px-2 py-2 pr-10'
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
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

            <div className='mt-2'>
              <p className='text-xs font-medium text-[#646464]'>
                Your password must include:
              </p>

              <div className='mt-2 grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-[#646464]'>
                <p className={hasMinLength ? 'text-green-600' : 'text-red-500'}>
                  o At least 8 characters
                </p>
                <p
                  className={
                    hasUppercase && hasLowercase
                      ? 'text-green-600'
                      : 'text-red-500'
                  }
                >
                  o Uppercase and lowercase letters
                </p>
                <p className={hasNumber ? 'text-green-600' : 'text-red-500'}>
                  o At least one number
                </p>
                <p
                  className={
                    hasSpecialCharacter ? 'text-green-600' : 'text-red-500'
                  }
                >
                  o At least one special character
                </p>
              </div>
            </div>
          </form>
          <div className='mt-8 flex '>
            <button
              onClick={() => router.push('/password/success')}
              type='submit'
              disabled={!isPasswordValid}
              className='w-full bg-[#E2943E] px-3 py-2 text-center text-white'
            >
              Submit
            </button>

            <button
              type='button'
              onClick={() => router.push('/signin')}
              className='w-full px-3 py-2 text-center text-[#211100]'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
