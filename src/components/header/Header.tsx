import { Text, HStack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { loginInfoAtom, signInUpModalAtom } from '../../atom/atom';
import SignInModal from '../modal/SignInUpModal';
import HambergerMenu from './HambergerMenu';
import SignInLink from './SignInLink';

/**
 * ヘッダー
 */
const Header: React.VFC = () => {
  const [loginInfo] = useAtom(loginInfoAtom);
  const [signInUpModal] = useAtom(signInUpModalAtom);

  const renderRightTop = () => {
    if (loginInfo.username) {
      return <HambergerMenu></HambergerMenu>;
    } else {
      return <SignInLink onOpen={signInUpModal.onOpen}></SignInLink>;
    }
  };

  return (
    <HStack spacing="auto" bg="teal.400" py={2} px={4} h="56px">
      <Text fontSize="lg" color="white">
        Smash Note
      </Text>
      {renderRightTop()}
      <SignInModal></SignInModal>
    </HStack>
  );
};

export default Header;
