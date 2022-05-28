import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginInfoAtom } from '../atom/atom';

export const useSignIn = () => {
  const [loginInfo, setLoginInfo] = useAtom(loginInfoAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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

  return { isLoading, isError, onClickSignInButton };
};
