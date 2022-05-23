import { Text, HStack, useDisclosure } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { loginInfoAtom } from '../atom/atom';
import HambergerMenu from './HambergerMenu';
import SignInLink from './SignInLink';
import SignInModal from './SignInModal';

/**
 * ヘッダー
 */
const Header: React.VFC = () => {
  const [loginInfo] = useAtom(loginInfoAtom);
  // サインインモーダルのフック
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderRightTop = () => {
    if (loginInfo.username) {
      return <HambergerMenu></HambergerMenu>;
    } else {
      return <SignInLink onOpen={onOpen}></SignInLink>;
    }
  };

  return (
    <HStack spacing="auto" bg="teal.400" py={2} px={4} h="56px">
      <Text fontSize="lg" color="white">
        Smash Note
      </Text>
      {renderRightTop()}
      <SignInModal isOpen={isOpen} onClose={onClose}></SignInModal>
    </HStack>
  );
};

export default Header;
