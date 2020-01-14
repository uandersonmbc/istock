import React from 'react';
import { Container, ScrollView, InputContainer, LogoView, Logo } from './styles';
import Form from './Form';

function SingIn(props) {
    return (
        <Container behavior="padding" enabled>
            <InputContainer>
                <LogoView>
                    <Logo>
                        IStock
                    </Logo>
                </LogoView>
                <ScrollView>
                    <Form {...props} />
                </ScrollView>
            </InputContainer>
        </Container>
    );
}



export default SingIn;
