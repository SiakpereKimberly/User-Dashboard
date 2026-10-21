'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
type PasswordForm = {
  email: string;
};
export default function PasswordPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PasswordForm>({
    mode: 'onChange',
  });
  console.log('isValid:', isValid);
  const onSubmit = (data: PasswordForm) => {
    console.log('submitted:', data);
    router.push('/password/verify');
  };
  return (
    <main className='relative min-h-screen bg-[#FAFAFA]'>
      <div className='absolute top-0 left-0 h-1 w-1/3 bg-[#E2943E]'></div>
      <header className='absolute top-0 right-0   flex justify-end px-10 py-7 '>
        <p className='text-sm text-[#212121]'>
          <span className='mr-4 font-Roboto'>Already have an account?</span>

          <Link
            href='/signin'
            className='text-[#E2943E] text-decoration-line: underline font-Roboto'
          >
            Sign in
          </Link>
        </p>
      </header>
      <div className='flex justify-center items-center pt-60'>
        <div className='w-full max-w-xl'>
          <h1 className='text-4xl font-bold text-[#211100]'>Reset Password</h1>
          <p className='text-sm font-Regular text-[#646464] font-Roboto'>
            We’ll send you a 6-digit code to confirm your email.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 font-Roboto'>
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
            <div className='mt-6 flex gap-3 '>
              <button
                type='submit'
                disabled={!isValid}
                className='w-full bg-[#E2943E] px-3 py-2 text-white text-center font-Roboto 
                disabled:bg-gray-300
                disabled:text-gray-500
                disabled:cursor-not-allowed'
              >
                Submit
              </button>
              <button
                type='button'
                onClick={() => router.push('/signin')}
                className='w-full px-3 py-2 text-[#211100] text-center bg-[#FFFFFF] border border-[#EEEEEE] font-Roboto'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
