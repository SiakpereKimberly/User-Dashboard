import Link from 'next/link';
export default function PasswordVerifyPage() {
  return (
    <main className='relative min-h-screen bg-zinc-200'>
      <div className='absolute top-0 left-0 h-1 w-full bg-[#E2943E]'></div>
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
      <div className='flex justify-center pt-44'>
        <div className='w-full max-w-xl text-center'>
          <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl text-white'></div>

          <h1 className='mt-4 text-xl font-bold text-[#211100]'>
            New password set!
          </h1>

          <p className='mt-1 text-sm text-[#646464]'>
            Click the button below to sign in again
          </p>

          <Link
            href='/signin'
            className='mt-4 block w-full bg-[#E2943E] px-3 py-2 text-center text-white'
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
