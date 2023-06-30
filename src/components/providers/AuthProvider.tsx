'use client';

import type {ReactNode} from 'react';
import {useState} from 'react';

import createCtx from '~/src/utils/createCtx';

interface Context {
  login: string;
  changeLogin: (val: string) => void;
}

const [useCtx, Provider] = createCtx<Context>();

interface Props {
  children: ReactNode;
}

function AuthProvider({children}: Props): React.ReactElement {
  const [login, setLogin] = useState('');

  const changeLogin = (val: string): void => {
    setLogin(val);
  };

  return (
    <Provider
      value={{
        changeLogin,
        login,
      }}
    >
      {children}
    </Provider>
  );
}

export {useCtx as useAuthContext, AuthProvider};
