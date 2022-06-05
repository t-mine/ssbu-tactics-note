import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginInfoAtom, signInUpModalAtom } from '../atom/atom';

export const useSignIn = () => {
  const [loginInfo, setLoginInfo] = useAtom(loginInfoAtom);
  // sign in
  const [isSignInLoading, setIsLoading] = useState(false);
  const [isSignInError, setIsError] = useState(false);
  const navigate = useNavigate();
  // サインイン＆サインアップモーダル
  const [signInUpModal] = useAtom(signInUpModalAtom);

  const signIn = async (id: string, password: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const user = await Auth.signIn(id, password);
      setIsLoading(false);
      setLoginInfo({ ...loginInfo, username: user.username });
      navigate('/test');
      // TODO これいる？
      signInUpModal.onClose();
    } catch (e) {
      console.log('error signing in', e);
      setIsError(true);
    }
  };

  return { isSignInLoading, isSignInError, signIn };
};
