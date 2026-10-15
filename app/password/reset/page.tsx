'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function PasswordVerifyPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
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
      <div className='flex justify-center pt-28'>
        <div className='w-full max-w-xl'>
          <h1 className='text-4xl font-bold text-[#211100]'>Reset password</h1>

          <p className='text-sm text-[#646464]'>Enter your new password.</p>
          <div className='mt-8'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-[#212121]'
            >
              New password
            </label>

            <div className='relative mt-2'>
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-2.5 text-[#646464]'
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-2 w-full border border-[#EEEEEE] bg-white px-3 py-2 text-[#212121]'
            />
          </div>
          <div className='mt-2'>
            <p className='text-xs font-medium text-[#646464]'>
              Your password must include:
            </p>

            <div className='mt-2 grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-[#646464]'>
              <p
                className={
                  password.length >= 8 ? 'text-green-500' : 'text-[#646464]'
                }
              >
                o At least 8 characters
              </p>
              <p
                className={
                  /[A-Z]/.test(password) && /[a-z]/.test(password)
                    ? 'text-green-500'
                    : 'text-[#646464]'
                }
              >
                o Uppercase and lowercase letters
              </p>
              <p
                className={
                  /\d/.test(password) ? 'text-green-500' : 'text-[#646464]'
                }
              >
                o At least one number
              </p>
              <p
                className={
                  /[!@#$%^&*()-+]/.test(password)
                    ? 'text-green-500'
                    : 'text-[#646464]'
                }
              >
                o At least one special character
              </p>
            </div>
          </div>
          <div className='mt-8 flex'>
            <Link
              href='/password/success'
              className='w-full bg-[#E2943E] px-3 py-2 text-center text-white'
            >
              Submit
            </Link>

            <Link
              href='/signin'
              className='w-full px-3 py-2 text-center text-[#211100]'
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
