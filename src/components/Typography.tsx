import type {ReactElement, ReactNode} from 'react';

import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';

type FontWeight = 'light' | 'regular' | 'semibold' | 'bold';
type LineHeight = '1.2' | '1.5';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
};

const fontConfig: Record<FontWeight, string> = {
  bold: 'font-bold',
  semibold: 'font-semibold',
  regular: 'font-regular',
  light: 'font-light',
};

const H1 = ({
  id,
  children,
  className,
  fontWeight = 'regular',
  lineHeight = '1.2',
}: Props): ReactElement => {
  const lineHeightConfig: Record<LineHeight, string> = {
    '1.2': 'leading-h1-1.2',
    '1.5': 'leading-h1-1.5',
  };

  return (
    <h1
      id={id}
      className={twMerge(
        clsx(
          'text-h1',
          fontConfig[fontWeight],
          lineHeightConfig[lineHeight],
          'text-basic',
        ),
        className,
      )}
    >
      {children}
    </h1>
  );
};

const H2 = ({
  id,
  children,
  className,
  fontWeight = 'regular',
  lineHeight = '1.2',
}: Props): ReactElement => {
  const lineHeightConfig: Record<LineHeight, string> = {
    '1.2': 'leading-h2-1.2',
    '1.5': 'leading-h2-1.5',
  };

  return (
    <h2
      id={id}
      className={twMerge(
        clsx(
          'text-h2',
          fontConfig[fontWeight],
          lineHeightConfig[lineHeight],
          'text-basic',
        ),
        className,
      )}
    >
      {children}
    </h2>
  );
};

const H3 = ({
  id,
  children,
  className,
  fontWeight = 'regular',
  lineHeight = '1.2',
}: Props): ReactElement => {
  const lineHeightConfig: Record<LineHeight, string> = {
    '1.2': 'leading-h3-1.2',
    '1.5': 'leading-h3-1.5',
  };

  return (
    <h3
      id={id}
      className={twMerge(
        clsx(
          'text-h3',
          fontConfig[fontWeight],
          lineHeightConfig[lineHeight],
          'text-basic',
        ),
        className,
      )}
    >
      {children}
    </h3>
  );
};

const H4 = ({
  id,
  children,
  className,
  fontWeight = 'regular',
  lineHeight = '1.2',
}: Props): ReactElement => {
  const lineHeightConfig: Record<LineHeight, string> = {
    '1.2': 'leading-h4-1.2',
    '1.5': 'leading-h4-1.5',
  };

  return (
    <p
      id={id}
      className={twMerge(
        clsx(
          'text-h4',
          fontConfig[fontWeight],
          lineHeightConfig[lineHeight],
          'text-basic',
        ),
        className,
      )}
    >
      {children}
    </p>
  );
};

const H5 = ({
  id,
  children,
  className,
  fontWeight = 'regular',
  lineHeight = '1.2',
}: Props): ReactElement => {
  const lineHeightConfig: Record<LineHeight, string> = {
    '1.2': 'leading-h5-1.2',
    '1.5': 'leading-h5-1.5',
  };

  return (
    <p
      id={id}
      className={twMerge(
        clsx(
          'text-h5',
          fontConfig[fontWeight],
          lineHeightConfig[lineHeight],
          'text-basic',
        ),
        className,
      )}
    >
      {children}
    </p>
  );
};

const H6 = ({
  id,
  children,
  className,
  fontWeight = 'regular',
  lineHeight = '1.2',
}: Props): ReactElement => {
  const lineHeightConfig: Record<LineHeight, string> = {
    '1.2': 'leading-h6-1.2',
    '1.5': 'leading-h6-1.5',
  };

  return (
    <h6
      id={id}
      className={twMerge(
        clsx(
          'text-h6',
          fontConfig[fontWeight],
          lineHeightConfig[lineHeight],
          'text-basic',
        ),
        className,
      )}
    >
      {children}
    </h6>
  );
};

export {H1, H2, H3, H4, H5, H6};
