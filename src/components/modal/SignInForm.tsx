import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { RefObject, useState } from 'react';
import { useSignIn } from '../../hooks/useSignIn';
import Loading from '../Loading';

/**
 * サインインフォーム
 */
const SignInForm: React.VFC = () => {
  const initialRef: RefObject<any> = React.useRef();
  // サインイン
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { isSignInLoading, isSignInError, signIn } = useSignIn();

  return (
    <>
      {isSignInLoading ? <Loading /> : ''}
      {isSignInError ? 'エラーが発生しました。' : ''}
      <FormControl>
        <FormLabel>ID</FormLabel>
        <Input ref={initialRef} placeholder="ID" onChange={(e) => setId(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>パスワード</FormLabel>
        <Input type="password" placeholder="パスワード" onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={() => signIn(id, password)} colorScheme="blue" mt={4}>
        ログイン
      </Button>
    </>
  );
};

export default SignInForm;
