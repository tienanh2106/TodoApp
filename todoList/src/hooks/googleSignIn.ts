// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {GoogleSignin, statusCodes} from 'react-native-google-signin';

export const configureGoogleSignIn = () => {
  try {
    GoogleSignin.configure({
      webClientId:
        '372603942566-sajkkj3bbtlivrh1b1igi27ke94epjqm.apps.googleusercontent.com',
      offlineAccess: true,
    });
    console.log('config');
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const userToken = userInfo.idToken;

    return userToken;
  } catch (error) {
    console.log(error);
  }
};
