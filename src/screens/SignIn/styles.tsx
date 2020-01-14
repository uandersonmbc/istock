import { Dimensions } from 'react-native';
import { THEME } from './../../shared/colors';
import styled from 'styled-components/native';
import { Formik } from 'formik';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    background: ${THEME.BACKGROUND};
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.View`
    width: ${Dimensions.get('window').width * 0.9}px;
`;
export const LogoView = styled.View`
    padding: 10px;
`;

export const Logo = styled.Text`
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    font-family: sans-serif;
    color: ${THEME.SECUNDARY};
`;

export const ScrollView = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false
})`
`;

export const Forme = styled(Formik)`
    flex:1;
`;

export const TextError = styled.Text`
    padding-left: 25px;
    font-size: 12px;
    color: ${THEME.DANGER}
`;
