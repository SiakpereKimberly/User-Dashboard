import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <main className='flex min-h-screen flex-col bg-zinc-200 md:flex-row'>
      <header className='absolute top-0 right-0 flex justify-end px-6 py-6 md:px-10 md:py-7'>
        <p className='text-sm text-[#212121]'>
          <span className='mr-4'>Can’t login?</span>

          <Link href='/help-center' className='text-[#E2943E] underline'>
            Help center
          </Link>
        </p>
      </header>

      <section className='relative hidden md:block md:w-1/3'>
        <Image
          src='/Frame1.png'
          alt='Sign In'
          width={800}
          height={900}
          className='h-full w-full object-cover'
        />
      </section>

      <section className='flex min-h-screen w-full items-center justify-center px-6 md:w-2/3 md:px-12'>
        <div className='w-full max-w-md'>
          <h1 className='text-4xl font-bold text-[#211100]'>Sign In</h1>

          <p className='text-sm text-[#646464]'>
            Let’s continue from where you stopped.
          </p>

          <form className='mt-8 space-y-6'>
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
                className='w-full border border-[#EEEEEE] bg-white px-3 py-2 text-[#212121] outline-none'
              />
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-[#212121]'
              >
                Password
              </label>

              <input
                id='password'
                type='password'
                placeholder='Enter your password'
                className='w-full border border-[#EEEEEE] bg-white px-3 py-2 text-[#212121] outline-none'
              />
            </div>

            <div>
              <Link
                href='/password'
                className='text-sm text-[#211100] underline'
              >
                Reset password
              </Link>
            </div>

            <button
              type='submit'
              className='w-full bg-[#E2943E] px-3 py-2 text-white'
            >
              Login
            </button>

            <footer className='flex justify-center gap-6 pt-4 text-sm font-bold text-[#211100]'>
              <Link href='/privacy-policy' className='underline'>
                Privacy policy
              </Link>

              <Link href='/terms-of-service' className='underline'>
                Terms of service
              </Link>
            </footer>
          </form>
        </div>
      </section>
    </main>
  );
}
