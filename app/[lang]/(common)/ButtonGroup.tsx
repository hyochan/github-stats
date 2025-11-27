import type {CSSProperties, ReactElement} from 'react';

const StyledButton = ({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}): ReactElement => {
  return (
    <button
      className={`flex-1 self-stretch font-bold cursor-pointer mx-[6px] ${
        selected
          ? 'border-[1.2px] rounded-[6px] text-contrast text-primary hover:opacity-70'
          : 'border border-solid border-transparent text-disabled hover:opacity-70'
      }`}
      name={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export type ButtonGroupChildType = {
  label: string;
};

type Props = {
  style?: CSSProperties;
  className: string;
  string?: string;
  selectedIndex: number;
  buttons: ButtonGroupChildType[];
  onClick?: (index: number) => void;
};

const ButtonGroup = ({
  style,
  className,
  buttons = [],
  selectedIndex = 0,
  onClick,
}: Props): ReactElement => {
  return (
    <div
      style={style}
      className={`rounded-[12px] h-12 w-full flex items-center bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/10 ${className}`}
    >
      {buttons.map((button, index) => {
        const selected = index === selectedIndex;

        return (
          <StyledButton
            key={index}
            selected={selected}
            label={button.label}
            onClick={() => onClick?.(index)}
          />
        );
      })}
    </div>
  );
};

export default ButtonGroup;
