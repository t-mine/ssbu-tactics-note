import { Link } from '@chakra-ui/react';

/**
 * サインインリンク
 */
const SignInLink: React.VFC<{ onOpen: () => void }> = (props) => {
  return <Link onClick={props.onOpen}>ログイン</Link>;
};

export default SignInLink;
