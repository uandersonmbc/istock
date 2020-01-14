import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@RocketSeat:token";

export const getToken = async () => {
    // return `4df42907981fc4e2cb0514ca220c6313KWE2i2m4L5Jv0WQZoxdCBVeMwpcsLHeMITwjn+osywdi7hvITlp8Qw+ZM1vQT8V9`;
    return await AsyncStorage.getItem(TOKEN_KEY);
}

export const onSignIn = (token: string) => AsyncStorage.setItem(TOKEN_KEY, token);

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null) ? true : false;
};
