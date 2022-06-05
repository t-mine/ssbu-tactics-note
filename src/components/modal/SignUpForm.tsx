import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import Loading from '../Loading';
import { useSignUp } from '../../hooks/useSignUp';
import VerificationModal from './VerificationModal';

/**
 * サインアップフォーム
 */
const SignUpForm: React.VFC = () => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { isSignUpLoading, isSignUpError, onClickSignUpButton } = useSignUp();

  return (
    <>
      {isSignUpLoading ? <Loading /> : ''}
      {isSignUpError ? 'エラーが発生しました。' : ''}
      <FormControl>
        <FormLabel>Eメールアドレス</FormLabel>
        <Input placeholder="Eメールアドレス" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>ID</FormLabel>
        <Input placeholder="ID" onChange={(e) => setId(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>パスワード</FormLabel>
        <Input type="password" placeholder="パスワード" onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={() => onClickSignUpButton(email, id, password)} colorScheme="blue" mt={4}>
        アカウント作成
      </Button>
      {/* 確認コード入力モーダル */}
      <VerificationModal></VerificationModal>
    </>
  );
};

export default SignUpForm;
