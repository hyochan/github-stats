import type {CSSProperties, FC, ReactElement} from 'react';

import {Inter} from '@next/font/google';
import clsx from 'clsx';

const inter = Inter({subsets: ['latin']});

interface ButtonProps {
  testID?: string;
  id?: string;
  className?: string;
  classNames?: {
    text?: string;
  };
  style?: CSSProperties;
  startElement?: ReactElement;
  text?: string | ReactElement;
  onClick?: () => void;
  isLoading?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({
  testID,
  onClick,
  text,
  className,
  classNames,
  style,
  isLoading,
  type = 'button',
  startElement,
}) => {
  return (
    <button
      data-testid={testID}
      className={`
        border rounded-md cursor-pointer p-3 border-border-light dark:border-border-dark
        opacity-100 transition duration-200
        flex items-center justify-center
        ${
          isLoading
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:opacity-50 active:opacity-50'
        }
        ${className}
      `}
      style={style}
      onClick={onClick}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="self-center border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin" />
      ) : (
        <div
          className={clsx(
            'relative flex-1 h-max text-center',
            'flex flex-row justify-center items-center',
          )}
        >
          <>
            {startElement ? startElement : null}
            <span
              className={clsx(
                'm-auto body2',
                inter.className,
                classNames?.text,
              )}
            >
              {text}
            </span>
          </>
        </div>
      )}
    </button>
  );
};

export default Button;
