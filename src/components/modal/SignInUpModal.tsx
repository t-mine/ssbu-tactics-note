import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { signInUpModalAtom } from '../../atom/atom';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

/**
 * サインイン＆サインアップモーダル（ヘッダーから読み込まれる）
 */
const SignInModal: React.VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 他のコンポーネントから操作しやすいようにグローバル変数に格納する
  const [signInUpModal, setSignInUpModal] = useAtom(signInUpModalAtom);
  useEffect(() => {
    setSignInUpModal({ ...signInUpModal, onOpen: onOpen, onClose: onClose });
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
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
                <ModalBody>
                  <SignInForm></SignInForm>
                </ModalBody>
              </TabPanel>
              {/* サインアップ */}
              <TabPanel>
                <ModalBody>
                  <SignUpForm></SignUpForm>
                </ModalBody>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
