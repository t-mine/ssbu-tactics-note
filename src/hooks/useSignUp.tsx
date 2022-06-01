import { useState } from 'react';

export const useSignUp = () => {
  const [isSignUpLoading, setIsLoading] = useState(false);
  const [isSignUpError, setIsError] = useState(false);

  const onClickSignUpButton = (id: string, password: string, onClose: () => void) => {
    onClose();
    setIsLoading(true);
    setIsError(false);
    // サインアップ処理
  };

  return { isSignUpLoading, isSignUpError, onClickSignUpButton };
};
