import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import { THEME } from '../../shared/colors';
export const Container = styled.View`
    flex: 1;
    background: ${THEME.BACKGROUND};
    padding-top: 10px;
`;
export const ListItem = styled(FlatList)`

`;

export const Text = styled.Text`
    font-family: sans-serif;
    color: ${THEME.WHITE};
`;

export const Header = styled.View`
    padding-left:10px;
    padding-right:10px;
`;
export const Loading = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width:60px;
    height: 60px;
    border: 2px solid ${THEME.SECUNDARY};
    border-radius: 60px;
    justify-content: center;
    align-items: center;
`;
