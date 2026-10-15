import Link from 'next/link';
export default function PasswordPage() {
  return (
    <main className='relative min-h-screen bg-zinc-200'>
      <div className='absolute top-0 left-0 h-1 w-1/3 bg-[#E2943E]'></div>
      <header className='absolute top-0 right-0   flex justify-end px-10 py-7 '>
        <p className='text-sm text-[#212121]'>
          <span className='mr-4'>Already have an account?</span>

          <Link
            href='/signin'
            className='text-[#E2943E] text-decoration-line: underline'
          >
            Sign in
          </Link>
        </p>
      </header>
      <div className='flex justify-center items-center pt-60'>
        <div className='w-full max-w-xl'>
          <h1 className='text-4xl font-bold text-[#211100]'>Reset Password</h1>
          <p className='text-sm font-Regular text-[#646464]'>
            We’ll send you a 6-digit code to confirm your email.
          </p>
          <form className='mt-8'>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-[#212121]'
              >
                Email address
              </label>
              <input
                id='email'
                type='email'
                placeholder='Enter your email'
                className='w-full border border-[#EEEEEE] px-3 py-2 outline-none bg-[#FFFFFF] text-[#212121]'
              />
            </div>
            <div className='mt-6 flex gap-3 '>
              <Link
                href='/password/verify'
                className='w-full bg-[#E2943E] px-3 py-2 text-white text-center'
              >
                Submit
              </Link>
              <Link
                href='/signin'
                className='w-full px-3 py-2 text-[#211100] text-center bg-[#FFFFFF] border border-[#EEEEEE]'
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
