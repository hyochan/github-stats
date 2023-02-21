import type {CSSProperties, FC, ReactElement} from 'react';

import Image from 'next/image';

interface ButtonProps {
  testID?: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
  imgSrc?: string;
  text?: string | ReactElement;
  onClick?: () => void;
  isLoading?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({
  testID,
  onClick,
  imgSrc,
  text,
  className,
  style,
  isLoading,
  type = 'button',
}) => {
  return (
    <button
      data-testid={testID}
      className={`
        px-4 py-2
        border rounded-md cursor-pointer
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
          className="
            relative flex-1 h-max text-center
            flex flex-row justify-center items-center
          "
        >
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="logo"
              width={24}
              height={24}
              className="absolute left-4 w-6 h-6 object-contain"
            />
          )}
          <span className="body3 m-auto">{text}</span>
        </div>
      )}
    </button>
  );
};

export default Button;
