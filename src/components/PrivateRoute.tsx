import { useAtom } from 'jotai';
import { Navigate } from 'react-router-dom';
import { loginInfoAtom } from '../atom/atom';

const PrivateRoute: React.FC = ({ children }) => {
  const [loginInfo] = useAtom(loginInfoAtom);
  return loginInfo.username ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
