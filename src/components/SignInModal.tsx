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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import React, { RefObject, useState } from 'react';
import { useSignIn } from '../hooks/useSignIn';
import Loading from '../components/Loading';
import { useSignUp } from '../hooks/useSignUp';
import VerificationModal from './VerificationModal';

/**
 * サインインモーダル
 */
const SignInModal: React.VFC<{ isOpen: boolean; onClose: () => void }> = (props) => {
  const initialRef: RefObject<any> = React.useRef();
  // サインイン
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { isSignInLoading, isSignInError, signIn } = useSignIn();
  // サインアップ
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpId, setSignUpId] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const { isSignUpLoading, isSignUpError, onClickSignUpButton } = useSignUp();

  return (
    <>
      {isSignInLoading || isSignUpLoading ? <Loading /> : ''}
      {isSignInError || isSignUpError ? 'エラーです' : ''}
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <Tabs>
            <TabList>
              <Tab>ログイン</Tab>
              <Tab>アカウント作成</Tab>
            </TabList>
            <TabPanels>
              {/* サインイン */}
              <TabPanel>
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
                  <Button onClick={() => signIn(id, password, props.onClose)} colorScheme="blue" mr={3}>
                    ログイン
                  </Button>
                </ModalFooter>
              </TabPanel>
              {/* サインアップ */}
              <TabPanel>
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Eメールアドレス</FormLabel>
                    <Input ref={initialRef} placeholder="Eメールアドレス" onChange={(e) => setSignUpEmail(e.target.value)} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>ID</FormLabel>
                    <Input ref={initialRef} placeholder="ID" onChange={(e) => setSignUpId(e.target.value)} />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>パスワード</FormLabel>
                    <Input type="password" placeholder="パスワード" onChange={(e) => setSignUpPassword(e.target.value)} />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => onClickSignUpButton(signUpEmail, signUpId, signUpPassword, props.onClose)} colorScheme="blue" mr={3}>
                    アカウント作成
                  </Button>
                </ModalFooter>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
      <VerificationModal></VerificationModal>
    </>
  );
};

export default SignInModal;
