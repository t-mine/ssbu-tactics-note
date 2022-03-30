import { Text, HStack, Link } from '@chakra-ui/react';
import { useState } from 'react';
import HambergerMenu from './HambergerMenu';

/**
 * ヘッダー
 */
export default function Header() {
  const [login, setLogin] = useState(false);

  const renderRightTop = () => {
    if (login) {
      return <HambergerMenu></HambergerMenu>;
    } else {
      return <Link onClick={onLoginLinkHandleClick}>ログイン＆新規登録</Link>;
    }
  };

  const onLoginLinkHandleClick = () => {
    setLogin(true);
  };

  return (
    <HStack spacing="auto" bg="teal.400" py={2} px={4} h="56px">
      <Text fontSize="lg" color="white">
        Smash Note
      </Text>
      {renderRightTop()}
    </HStack>
  );
}
