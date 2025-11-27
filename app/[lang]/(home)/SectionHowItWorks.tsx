'use client';

import type {ReactElement} from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {ArrowRightIcon} from '@primer/octicons-react';
import clsx from 'clsx';
import Image from 'next/image';

import {subscribeNewsletter} from '../../../src/fetches/newsLetter';
import type {Translates} from '../../../src/localization';
import {validateEmail} from '../../../src/utils/common';
import Button from '../(common)/Button';
import TextInput from '../(common)/TextInput';

import imgBgSection2 from '@/public/assets/bg_section2.png';

type Props = {
  t: Translates['home'];
};

export default function SectionHowItWorks({t}: Props): ReactElement {
  const [successText, setSuccessText] = useState('');
  const {
    register,
    formState: {errors, isSubmitting},
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {email: ''},
  });

  const reqNewsLetterSubs = async ({email}: {email: string}): Promise<void> => {
    if (!validateEmail(email)) {
      setError('email', {type: 'validate'}, {shouldFocus: true});

      return;
    }

    const text = await subscribeNewsletter(email);
    setSuccessText(`${text}.`);
  };

  return (
    <div
      className={clsx(
        'self-stretch bg-paper bg-cover',
        'flex flex-col justify-center items-center',
        'py-20 px-6',
      )}
      style={{
        backgroundImage: `url(${imgBgSection2})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-[1000px] flex flex-col items-center gap-8">
        {/* Image */}
        <div className="flex justify-center">
          <div
            className={clsx(
              'rounded-[24px] p-8',
              'bg-black/5 dark:bg-white/5',
              'backdrop-blur-md',
              'border border-black/10 dark:border-white/10',
              'shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]',
            )}
          >
            <Image
              className="w-[180px] h-auto"
              src="/assets/works.png"
              alt="works"
              width={256}
              height={256}
            />
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full flex justify-center">
          <div
            className={clsx(
              'rounded-[32px] p-12 w-full',
              'bg-black/10 dark:bg-white/5',
              'backdrop-blur-xl',
              'border border-black/20 dark:border-white/10',
              'shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]',
              'flex flex-col items-center justify-start',
              'max-[768px]:p-8',
            )}
          >
            {/* Title */}
            <h2 className="w-full mb-6 text-center font-bold text-[40px] text-contrast-light dark:text-contrast-dark leading-tight max-[768px]:text-[32px]">
              {t.howItWorks}
            </h2>

            {/* Description */}
            <p className="w-full mb-4 text-center text-[18px] text-gray6 dark:text-gray3 leading-relaxed max-w-[800px] mx-auto">
              {t.howItWorksDesc}
            </p>
            <p className="w-full mb-10 text-center text-[16px] text-gray5 dark:text-gray4 leading-relaxed max-w-[700px] mx-auto">
              {t.subscribeForMoreUpdates}
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit(reqNewsLetterSubs)} className="w-full max-w-[600px]">
              <div
                className={clsx(
                  'rounded-[16px] p-5',
                  'bg-white/60 dark:bg-white/10',
                  'backdrop-blur-lg',
                  'border border-white/60 dark:border-white/20',
                  'shadow-lg',
                  'flex flex-row items-center gap-4',
                  'hover:shadow-xl transition-all duration-300',
                  'max-[600px]:flex-col max-[600px]:items-stretch',
                )}
              >
                <div className="flex-1 flex flex-col gap-1 max-[600px]:w-full">
                  <label className="text-[11px] font-semibold text-gray6 dark:text-gray3 uppercase tracking-wider">
                    {t.newsLetter}
                  </label>
                  <TextInput
                    className="flex-1 text-[15px] bg-transparent text-gray8 dark:text-white placeholder:text-gray5 dark:placeholder:text-gray4 max-[600px]:w-full border-none focus:outline-none"
                    placeholder={t.emailAddress}
                    {...register('email', {required: true})}
                  />
                </div>
                <Button
                  className={clsx(
                    'w-12 h-12 rounded-[14px] border-0',
                    'bg-brand hover:bg-brand/90 hover:scale-105',
                    'flex items-center justify-center flex-shrink-0',
                    'transition-all duration-200',
                    'shadow-lg hover:shadow-xl',
                    'max-[600px]:w-full max-[600px]:h-12',
                  )}
                  type="submit"
                  loading={isSubmitting}
                  text={<ArrowRightIcon size={22} className="text-white" />}
                />
              </div>
              {successText ? (
                <p className="mt-4 text-success-light dark:text-success-dark text-[14px] text-center">
                  {t.successEmailSubscription}
                </p>
              ) : null}
              {errors.email ? (
                <p className="mt-4 text-validation-light dark:text-validation-dark text-[14px] text-center">
                  {t.notValidEmail}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
