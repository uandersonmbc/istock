import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { THEME } from '../../shared/colors';

export const _Button = styled.TouchableOpacity`
flex-direction: row;
height: 50px;
border-radius: 50px;
margin-top: 20px;
margin-bottom: 20px;
padding: 5px;
font-size: 14px;
align-items: center;
justify-content: center;
background-color: ${props => THEME[props.variant] || THEME.PRIMARY};
`;

export const LoadingButton = styled.View`
flex-direction: row;
height: 50px;
border-radius: 50px;
margin-top: 20px;
margin-bottom: 20px;
padding: 5px;
font-size: 14px;
align-items: center;
justify-content: center;
background-color: ${props => THEME[props.variant] || THEME.PRIMARY};
`;

export const Text = styled.Text`
text-transform: uppercase;
color: ${props => props.variant ? props.variant : "#FFF"};
`;
