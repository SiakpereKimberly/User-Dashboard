import Image from 'next/image';
import Link from 'next/link';
export default function SignInPage() {
  return (
    <main className='flex min-h-screen bg-zinc-200'>
      <header className='absolute top-0 right-0   flex justify-end px-10 py-7 '>
        <p className='text-sm text-[#212121]'>
          <span className='mr-4'>Can’t login?</span>

          <Link
            href='/help-center'
            className='text-[#E2943E] text-decoration-line: underline'
          >
            Help center
          </Link>
        </p>
      </header>
      <section className='relative w-1/3'>
        <Image
          src='/Frame1.png'
          alt='Sign In'
          width={800}
          height={900}
          className='w-full h-full object-cover'
        ></Image>
      </section>
      <section className='w-2/3 flex items-center justify-center'>
        <div className='w-full max-w-md'>
          <h1 className='text-4xl font-bold text-[#211100]'>Sign In</h1>
          <p className='text-sm font-Regular text-[#646464]'>
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
                className='w-full border border-[#EEEEEE] px-3 py-2 outline-none bg-[#FFFFFF] text-[#212121]'
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
                className='w-full border border-[#EEEEEE] px-3 py-2 outline-none bg-[#FFFFFF] text-[#212121]'
              />
            </div>
            <div>
              <Link
                href='/password'
                className='text-sm text-[#211100] text-decoration-line: underline'
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

            <footer className='flex justify-center gap-6 p-8 text-sm text-[#211100] font-bold'>
              <Link
                href='/privacy-policy'
                className='text-decoration-line: underline'
              >
                Privacy policy
              </Link>
              <Link
                href='/terms-of-service'
                className='text-decoration-line: underline'
              >
                Terms of service
              </Link>
            </footer>
          </form>
        </div>
      </section>
    </main>
  );
}
