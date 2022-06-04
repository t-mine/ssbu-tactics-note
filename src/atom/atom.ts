import { atomWithStorage } from 'jotai/utils';

// ログイン情報
export const loginInfoAtom = atomWithStorage('loginInfo', { username: '' });

// 確認コード入力モーダル
export const verificationModalAtom = atomWithStorage('verification', {
  fields: {
    id: '',
    email: '',
    password: '',
  },
  onOpen: () => {},
  onClose: () => {},
});
