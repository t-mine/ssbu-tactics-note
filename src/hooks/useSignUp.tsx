import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { verificationModalAtom } from '../atom/atom';

export const useSignUp = () => {
  // atom
  const [verificationModal, setVerificationModal] = useAtom(verificationModalAtom);
  // sign up
  const [isSignUpLoading, setIsLoading] = useState(false);
  const [isSignUpError, setIsError] = useState(false);

  const onClickSignUpButton = (email: string, id: string, password: string, onClose: () => void) => {
    onClose();
    setIsLoading(true);
    setIsError(false);
    // サインアップ処理
    Auth.signUp({
      username: id,
      password: password,
      attributes: {
        email: email,
      },
    })
      .then((result) => {
        setIsLoading(false);
        setVerificationModal({
          ...verificationModal,
          fields: {
            id: result.user.getUsername(),
            email: email,
            password: password,
          },
        });
        verificationModal.onOpen();
      })
      .catch((e) => {
        console.log('error signing in', e);
        setIsLoading(false);
        setIsError(true);
      });
  };

  return { isSignUpLoading, isSignUpError, onClickSignUpButton };
};
