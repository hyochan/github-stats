import {atom} from 'recoil';

export const signedInState = atom<boolean>({
  key: 'signedInState',
  default: false,
});
