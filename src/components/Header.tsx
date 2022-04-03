import { Text, HStack } from '@chakra-ui/react';
import SignInButton from './SignInButton';

/**
 * ヘッダー
 */
export default function Header() {
  // const renderRightTop = () => {
  //   if (login) {
  //     return <HambergerMenu></HambergerMenu>;
  //   } else {
  //     return <SignInButton></SignInButton>;
  //   }
  // };

  return (
    <HStack spacing="auto" bg="teal.400" py={2} px={4} h="56px">
      <Text fontSize="lg" color="white">
        Smash Note
      </Text>
      <SignInButton></SignInButton>
    </HStack>
  );
}
