import Link from 'next/link';
export default function PasswordVerifyPage() {
  return (
    <main className='relative min-h-screen bg-zinc-200'>
      <div className='absolute top-0 left-0 h-1 w-1/2 bg-[#E2943E]'></div>
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
            Enter the code sent to johndoe@example.com to reset password.
          </p>

          <div className='mt-8'>
            <label className='block text-sm font-medium text-[#212121]'>
              Enter 6-digit code
            </label>

            <div className='mt-2 flex gap-10'>
              <input
                type='text'
                maxLength={1}
                className='h-15 w-15 border border-[#EEEEEE] bg-white text-center'
              />

              <input
                type='text'
                maxLength={1}
                className='h-15 w-15 border border-[#EEEEEE] bg-white text-center'
              />

              <input
                type='text'
                maxLength={1}
                className='h-15 w-15 border border-[#EEEEEE] bg-white text-center'
              />
              <input
                type='text'
                maxLength={1}
                className='h-15 w-15 border border-[#EEEEEE] bg-white text-center'
              />
              <input
                type='text'
                maxLength={1}
                className='h-15 w-15 border border-[#EEEEEE] bg-white text-center'
              />
              <input
                type='text'
                maxLength={1}
                className='h-15 w-15 border border-[#EEEEEE] bg-white text-center'
              />
            </div>
          </div>
          <Link
            href='/password/reset'
            className='mt-12 block w-full bg-[#E2943E] px-3 py-2 text-center text-white'
          >
            Submit
          </Link>
          <p className='mt-4 text-center text-sm text-[#212121]'>01:00</p>
        </div>
      </div>
    </main>
  );
}
