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
import React, { RefObject, useState } from 'react';

const SignInButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef: RefObject<any> = React.useRef();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSignInButtonClick = async () => {
    try {
      const user = await Auth.signIn(id, password);
      console.log(JSON.stringify(user));
      // TODO userの中身をjotaiに格納するしかない？
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
          {/* Header */}
          <ModalHeader></ModalHeader>
          {/* Close Button */}
          <ModalCloseButton />
          {/* Body */}
          <ModalBody pb={6}>
            {/* ID */}
            <FormControl>
              <FormLabel>ID</FormLabel>
              <Input ref={initialRef} placeholder="ID" onChange={handleIdChange} />
            </FormControl>
            {/* Password */}
            <FormControl mt={4}>
              <FormLabel>パスワード</FormLabel>
              <Input type="password" placeholder="パスワード" onChange={handlePasswordChange} />
            </FormControl>
          </ModalBody>
          {/* Footer */}
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
