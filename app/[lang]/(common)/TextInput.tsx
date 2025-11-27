import {forwardRef} from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string | undefined;
  errorMessage?: string;
}

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      className,
      value,
      placeholder,
      onChange,
      onBlur,
      style,
      errorMessage,
      ...rest
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        name={name}
        className={`flex-1 self-stretch rounded-[4px] min-h-12 font-inter px-2 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none ${
          errorMessage ? 'border border-red-500' : ''
        } ${className}`}
        style={style}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    );
  },
);

export default TextInput;
