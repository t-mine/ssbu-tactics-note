import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { loginInfoAtom } from '../atom/atom';

const AppInit: React.VFC = () => {
  // ユーザ情報(コンポーネント間で共有される)
  const [loginInfo, setLoginInfo] = useAtom(loginInfoAtom);

  // サインインしているユーザ情報を他のコンポーネントと共有する
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setLoginInfo({ ...loginInfo, username: user.username });
      })
      .catch(() => {
        if (location.pathname !== '/') {
          window.location.href = '/';
        }
      });
  }, []);

  return null;
};

export default AppInit;
