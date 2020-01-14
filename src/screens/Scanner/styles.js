import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { THEME } from './../../shared/colors';
export const Container = styled.View`
    flex: 1;
    background: ${THEME.BACKGROUND};
`;

export const ViewButtons = styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width - 30}px;
    position: absolute;
    bottom: 20px;
    flex-direction: row;
    justify-content: space-around;
`;

export const Texto = styled.Text`
    font-size: 18px;
`;

export const ViewCode = styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width - 30}px;
    position: absolute;
    bottom: 100;
    border-radius: 10px;
    opacity: 0.7;
    background: #FFF;
    padding: 15px;
    justify-content: center;
    align-items: center;
`;

export const CardActions = styled.View`
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: 100px;
    height: 60px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
`;
