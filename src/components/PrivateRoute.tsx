import { useAtom } from 'jotai';
import { Fragment, useEffect } from 'react';
import { loginInfoAtom } from '../atom/atom';

const PrivateRoute: React.FC = (props: any) => {
  const [loginInfo] = useAtom(loginInfoAtom);

  useEffect(() => {
    if (!loginInfo.username) {
      window.location.href = '/';
    }
  }, []);

  return <Fragment>{props.children}</Fragment>;
};

export default PrivateRoute;
