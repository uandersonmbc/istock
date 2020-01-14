import styled from 'styled-components/native';
import { THEME } from '../../../shared/colors';
export const Container = styled.View`
    flex: 1;
    background: ${THEME.BACKGROUND};
    padding-top: 10px;
`;
export const Text = styled.Text`
    padding-left: 5px;
    font-size: 36px;
    text-align: center;
    color: ${THEME.WHITE};
`;
