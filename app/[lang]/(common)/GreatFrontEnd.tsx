'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import greatfrontendGif from '@/public/assets/greatfrontend-js.gif';

export type GreatFrontEndProps = {
  className?: string;
  href: string;
  title?: string;
};

export default function GreatFrontEnd({
  className,
  href,
  title,
}: GreatFrontEndProps): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('flex flex-col items-start group', className)}
    >
      <div className="w-full max-w-[728px] group-hover:opacity-90 transition-opacity">
        <Image
          src={greatfrontendGif}
          alt="GreatFrontEnd - Ace your next front end interview"
          className="w-full h-auto"
          priority
        />
      </div>
      {title && (
        <span className="text-[10px] text-gray6 dark:text-gray2 mt-1.5 group-hover:text-gray5 dark:group-hover:text-gray1 transition-colors">
          {title}
        </span>
      )}
    </a>
  );
}
