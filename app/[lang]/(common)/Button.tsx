import type {CSSProperties, FC, ReactElement} from 'react';
import {cloneElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

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
  loading?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({
  testID,
  onClick,
  text,
  className,
  classNames,
  style,
  loading,
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
          loading
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:opacity-50 active:opacity-50'
        }
        ${className}
      `}
      style={style}
      onClick={onClick}
      type={type}
      disabled={loading}
    >
      {loading ? (
        <div className="self-center border-2 border-gray8 dark:border-gray3 border-t-transparent rounded-full w-5 h-5 animate-spin" />
      ) : (
        <div
          className={clsx(
            'relative flex-1 h-max text-center',
            'flex flex-row justify-center items-center',
          )}
        >
          <>
            {startElement
              ? cloneElement(startElement as ReactElement<any>, {
                  style: {
                    position: 'absolute',
                    left: 0,
                  },
                })
              : null}
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
