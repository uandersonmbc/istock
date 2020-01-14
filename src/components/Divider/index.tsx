import React from 'react';
import { Container, Context, Line, Text } from './styles';

export default function Divider() {
    return (
        <Container>
            <Context>
                <Line />
                <Text>OU</Text>
                <Line />
            </Context>
        </Container>
    );
}
