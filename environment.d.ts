declare module '*.json' {
  const content;
  export default content;
}

declare module '*.png' {
  const content;
  export default content;
}

declare module '*.jpg' {
  const content;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.svg?component' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module 'react-simple-snackbar' {
  import type React from 'react';

  interface SnackbarProps {}

  const Snackbar: React.FC<SnackbarProps>;

  export const useSnackbar = (): any => {
    return [openSnackbar, closeSnackbar];
  };

  export default Snackbar;
}
