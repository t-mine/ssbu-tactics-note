import { Auth } from 'aws-amplify';

const AuthService = {
  signIn: async (username: string, password: string) => {
    try {
      await Auth.signIn(username, password);
    } catch (error) {
      console.log('error signing in', error);
    }
  },
  signOut: () => {
    try {
      Auth.signOut().then(() => {
        window.location.href = '/';
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  },
};

export default AuthService;
