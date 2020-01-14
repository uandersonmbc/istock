import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { THEME } from '../../shared/colors';
export const Container = styled.View`
    flex-direction: row;
    align-content: space-around;
    justify-content: center;
    height: 50px;
    border: 2px solid ${THEME.SECUNDARY};
    background: #160f29b0;
    border-radius: 50px;
    margin-top: 10px;
`;

export const Icons = styled(Icon)`
    color: ${THEME.SECUNDARY};
    font-size: 20px;
    padding: 13px;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: THEME.WHITE
})`
    flex: 1;
    font-size: 18px;
    color: #FFF;
`;

/**
 * Input de busca
 */
export const ContainerSearch = styled.View`
    flex-direction: row;
    align-content: space-around;
    justify-content: center;
    height: 50px;
    border: 2px solid ${THEME.SECUNDARY};
    background: #160f29b0;
    border-radius: 5px;
`;

export const TextInputSearch = styled.TextInput.attrs({
    placeholderTextColor: THEME.WHITE
})`
    flex: 1;
    font-size: 18px;
`;
