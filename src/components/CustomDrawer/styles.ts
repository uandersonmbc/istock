import styled from 'styled-components/native';
import { THEME } from './../../shared/colors';
export const Container = styled.View`
    flex:1;
`;

export const LogoContainer = styled.View`
    flex:0.2;
    justify-content: center;
    background: ${THEME.BACKGROUND};
`;

export const Logo = styled.Text`
    font-size:70px;
    font-weight: bold;
    text-align: center;
    color: ${THEME.SECUNDARY};
    font-family: sans-serif;
`;

export const ScrollView = styled.ScrollView`
    flex:0.8;
`;

export const ButtonExit = styled.TouchableOpacity`
    flex: 1;
    padding: 18px;
`;
export const Exit = styled.Text`
    font-size:15px;
    font-weight: bold;
    color: ${THEME.DANGER};
`;
