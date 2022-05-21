import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { loginInfoAtom } from '../atom/atom';

const AppInit: React.VFC = () => {
  // ユーザ情報(コンポーネント間で共有される)
  const [loginInfo, setLoginInfo] = useAtom(loginInfoAtom);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        // サインインしているユーザ情報を他のコンポーネントと共有する
        setLoginInfo({ ...loginInfo, username: user.username });
      })
      .catch(() => {
        setLoginInfo({ ...loginInfo, username: '' });
      });
  }, []);

  return null;
};

export default AppInit;
