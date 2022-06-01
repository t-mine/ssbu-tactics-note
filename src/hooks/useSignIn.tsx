import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginInfoAtom } from '../atom/atom';

export const useSignIn = () => {
  const [loginInfo, setLoginInfo] = useAtom(loginInfoAtom);
  const [isSignInLoading, setIsLoading] = useState(false);
  const [isSignInError, setIsError] = useState(false);
  const navigate = useNavigate();

  const onClickSignInButton = (id: string, password: string, onClose: () => void) => {
    onClose();
    setIsLoading(true);
    setIsError(false);
    Auth.signIn(id, password)
      .then((user) => {
        setIsLoading(false);
        setLoginInfo({ ...loginInfo, username: user.username });
        navigate('/test');
      })
      .catch((e) => {
        console.log('error signing in', e);
        setIsError(true);
      });
  };

  return { isSignInLoading, isSignInError, onClickSignInButton };
};
