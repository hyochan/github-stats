'use client';

import type {ReactNode} from 'react';
import createCtx from '~/utils/createCtx';
import {useState} from 'react';

interface Context {
  signedIn: boolean;
  changeSignedIn: (val: boolean) => void;
}

const [useCtx, Provider] = createCtx<Context>();

interface Props {
  children: ReactNode;
}

function AuthProvider({children}: Props): React.ReactElement {
  const [signedIn, setSignedIn] = useState(false);

  const changeSignedIn = (val: boolean): void => {
    setSignedIn(val);
  };

  return (
    <Provider
      value={{
        changeSignedIn,
        signedIn,
      }}
    >
      {children}
    </Provider>
  );
}

export {useCtx as useAuthContext, AuthProvider};
