import { Text, HStack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { loginInfoAtom } from '../atom/atom';
import HambergerMenu from './HambergerMenu';
import SignInButton from './SignInButton';

/**
 * ヘッダー
 */
const Header: React.VFC = () => {
  const [loginInfo] = useAtom(loginInfoAtom);

  const renderRightTop = () => {
    if (loginInfo.username) {
      return <HambergerMenu></HambergerMenu>;
    } else {
      return <SignInButton></SignInButton>;
    }
  };

  return (
    <HStack spacing="auto" bg="teal.400" py={2} px={4} h="56px">
      <Text fontSize="lg" color="white">
        Smash Note
      </Text>
      {renderRightTop()}
    </HStack>
  );
};

export default Header;
