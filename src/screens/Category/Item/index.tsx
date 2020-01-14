import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Info,
    DivIcon,
    Button,
    Title,
    Div,
} from './styles';

export default function Item({ item, navigate }) {
    return (
        <Container>
            <Info>
                <Div>
                    <Title>{item.name}</Title>
                </Div>
                <DivIcon>
                    <Button onPress={() => navigate('EditCategory', item.id)}>
                        <Icon name="edit" size={30} style={{ paddingLeft: 20, color: '#78E3FD' }} />
                    </Button>
                </DivIcon>
            </Info>
        </Container>
    );
}
