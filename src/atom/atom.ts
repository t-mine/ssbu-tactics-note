import { atomWithStorage } from 'jotai/utils';

export const loginInfoAtom = atomWithStorage('loginInfo', { username: '' });
