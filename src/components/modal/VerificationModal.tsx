import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import React, { RefObject, useEffect, useState } from 'react';
import { verificationModalAtom } from '../../atom/atom';
import { useSignIn } from '../../hooks/useSignIn';
import Loading from '../Loading';

/**
 * 確認コード入力モーダル
 */
const VerificationModal: React.VFC = () => {
  // atom
  const [verificationModal, setVerificationModal] = useAtom(verificationModalAtom);
  // サインアップ時に入力したIDとパスワード TODO
  const id = verificationModal.fields.id;
  const password = verificationModal.fields.password;
  // 確認コード入力モーダル
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef: RefObject<any> = React.useRef();
  const [verificationCode, setVerificationCode] = useState('');
  // サインイン
  const { isSignInLoading, signIn } = useSignIn();

  useEffect(() => {
    setVerificationModal({ ...verificationModal, onOpen: onOpen });
  }, []);

  const onSubmitBtnClick = async () => {
    try {
      await Auth.confirmSignUp(id, verificationCode);
      onClose(); // TODO イランと思う。
      await signIn(id, password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isSignInLoading ? <Loading></Loading> : ''}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>確認コードを入力してください</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>確認コード</FormLabel>
              <Input ref={initialRef} placeholder="ID" onChange={(e) => setVerificationCode(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSubmitBtnClick}>
              送信
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VerificationModal;
