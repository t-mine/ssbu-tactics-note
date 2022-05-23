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
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import React, { RefObject, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginInfoAtom } from '../atom/atom';

/**
 * サインインモーダル
 */
const SignInModal: React.VFC<{ isOpen: boolean; onClose: () => void }> = (props) => {
  const initialRef: RefObject<any> = React.useRef();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useAtom(loginInfoAtom);
  const navigate = useNavigate();

  const onSignInButtonClick = async () => {
    Auth.signIn(id, password)
      .then((user) => {
        setLoginInfo({ ...loginInfo, username: user.username });
        props.onClose();
        navigate('/test');
      })
      .catch((e) => {
        console.log('error signing in', e);
      });
  };

  return (
    <>
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
            <Button onClick={onSignInButtonClick} colorScheme="blue" mr={3}>
              ログイン
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
