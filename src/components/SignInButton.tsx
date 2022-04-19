import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import React, { RefObject, useState } from 'react';
import { loginInfoAtom } from '../atom/atom';

/**
 * サインインボタン
 */
const SignInButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef: RefObject<any> = React.useRef();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useAtom(loginInfoAtom);

  const onSignInButtonClick = async () => {
    try {
      const user = await Auth.signIn(id, password);
      setLoginInfo({ ...loginInfo, username: user.username });
      onClose();
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <>
      <Link onClick={onOpen}>ログイン</Link>

      <Modal isOpen={isOpen} onClose={onClose}>
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
            <Button onClick={onSignInButtonClick} colorScheme="blue" mr={3}>
              ログイン
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInButton;
