import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { RefObject, useState } from 'react';
import { useSignIn } from '../hooks/useSignIn';
import Loading from '../components/Loading';

/**
 * サインインモーダル
 */
const SignInModal: React.VFC<{ isOpen: boolean; onClose: () => void }> = (props) => {
  const initialRef: RefObject<any> = React.useRef();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, isError, onClickSignInButton } = useSignIn();

  return (
    <>
      {isLoading ? <Loading /> : ''}
      {isError ? 'エラーです' : ''}
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>ID</FormLabel>
              <Input ref={initialRef} placeholder="ID" onChange={(e) => setId(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>パスワード</FormLabel>
              <Input type="password" placeholder="パスワード" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => onClickSignInButton(id, password, props.onClose)} colorScheme="blue" mr={3}>
              ログイン
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
