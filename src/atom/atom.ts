import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// ログイン情報
export const loginInfoAtom = atomWithStorage('loginInfo', { username: '' });

// サインイン&サインアップモーダル
export const signInUpModalAtom = atom({
  // Header内のサインインリンクでサインインモーダルを開くために使用する
  onOpen: () => {},
  // サインイン成功後にサインインモーダルを閉じるために使用する
  onClose: () => {},
});

// 確認コード入力モーダル
export const verificationModalAtom = atom({
  // 確認コード認証後にサインインするために
  // サインアップ時の入力値を保持する変数
  fields: {
    id: '',
    email: '',
    password: '',
  },
  // サインアップ成功時に確認コード入力モーダルを表示するために使用する
  onOpen: () => {},
});
