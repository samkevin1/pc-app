import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

// Somewhere in your code
const signIn = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
};

export default signIn;
