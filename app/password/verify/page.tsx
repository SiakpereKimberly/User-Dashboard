'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
type VerificationForm = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};
export default function PasswordVerifyPage() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const handleCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<VerificationForm>({
    mode: 'onChange',
  });
  const onSubmit = (data: VerificationForm) => {
    console.log('Verification code:', data);
    router.push('/password/reset');
  };
  return (
    <main className='relative min-h-screen bg-[#FAFAFA]'>
      <div className='absolute top-0 left-0 h-1 w-1/2 bg-[#E2943E]'></div>
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
      <div className='flex justify-center items-center pt-60'>
        <div className='w-full max-w-[480px]'>
          <h1 className='text-4xl font-bold text-[#211100] font-Roboto'>
            Reset Password
          </h1>
          <p className='text-sm font-Regular text-[#646464] font-Roboto'>
            Enter the code sent to johndoe@example.com to reset password.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 font-Roboto'>
            <label
              htmlFor='code'
              className='block text-sm font-medium text-[#212121] mb-2'
            >
              Enter 6-digit code
            </label>

            <div className='flex w-full justify-between'>
              <input
                type='text'
                maxLength={1}
                {...register('code1', {
                  required: true,
                  pattern: /^[0-9]$/,
                })}
                ref={(element) => {
                  inputRefs.current[0] = element;
                }}
                onChange={(e) => {
                  setValue('code1', e.target.value, {
                    shouldValidate: true,
                  });

                  handleCodeChange(e, 0);
                }}
                className='h-[52px] w-[52px] border border-[#EEEEEE] bg-white text-center text-[#939393]'
              />

              <input
                type='text'
                maxLength={1}
                {...register('code2', {
                  required: true,
                  pattern: /^[0-9]$/,
                })}
                ref={(element) => {
                  inputRefs.current[1] = element;
                }}
                onChange={(e) => {
                  setValue('code2', e.target.value, {
                    shouldValidate: true,
                  });

                  handleCodeChange(e, 1);
                }}
                className='h-[52px] w-[52px] border border-[#EEEEEE] bg-white text-center text-[#939393]'
              />

              <input
                type='text'
                maxLength={1}
                {...register('code3', {
                  required: true,
                  pattern: /^[0-9]$/,
                })}
                ref={(element) => {
                  inputRefs.current[2] = element;
                }}
                onChange={(e) => {
                  setValue('code3', e.target.value, {
                    shouldValidate: true,
                  });

                  handleCodeChange(e, 2);
                }}
                className='h-[52px] w-[52px] border border-[#EEEEEE] bg-white text-center text-[#939393]'
              />
              <input
                type='text'
                maxLength={1}
                {...register('code4', {
                  required: true,
                  pattern: /^[0-9]$/,
                })}
                ref={(element) => {
                  inputRefs.current[3] = element;
                }}
                onChange={(e) => {
                  setValue('code4', e.target.value, {
                    shouldValidate: true,
                  });

                  handleCodeChange(e, 3);
                }}
                className='h-[52px] w-[52px] border border-[#EEEEEE] bg-white text-center text-[#939393]'
              />
              <input
                type='text'
                maxLength={1}
                {...register('code5', {
                  required: true,
                  pattern: /^[0-9]$/,
                })}
                ref={(element) => {
                  inputRefs.current[4] = element;
                }}
                onChange={(e) => {
                  setValue('code5', e.target.value, {
                    shouldValidate: true,
                  });

                  handleCodeChange(e, 4);
                }}
                className='h-[52px] w-[52px] border border-[#EEEEEE] bg-white text-center text-[#939393]'
              />
              <input
                type='text'
                maxLength={1}
                {...register('code6', {
                  required: true,
                  pattern: /^[0-9]$/,
                })}
                ref={(element) => {
                  inputRefs.current[5] = element;
                }}
                onChange={(e) => {
                  setValue('code6', e.target.value, {
                    shouldValidate: true,
                  });

                  handleCodeChange(e, 5);
                }}
                className='h-[52px] w-[52px] border border-[#EEEEEE] bg-white text-center text-[#939393]'
              />
            </div>
          </form>
          <button
            onClick={() => router.push('/password/reset')}
            type='submit'
            disabled={!isValid}
            className='mt-12 block w-full bg-[#E2943E] px-3 py-2 text-center text-white font-Roboto disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500'
          >
            Submit
          </button>
          <p className='mt-4 text-center text-sm text-[#212121]'>01:00</p>
        </div>
      </div>
    </main>
  );
}
