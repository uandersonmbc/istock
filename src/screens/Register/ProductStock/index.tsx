import React from 'react';

import Form from './Form';

import {
    Container,
    ImageCompany,
    InfoProduct,
    Info,
    NameProduct,
    NameCategory,
    NameCompany
} from './styles';

export default function Register({ navigation }) {
    const code = navigation.state.params.code
    const product = navigation.state.params.product
    const handleSubmit = (values) => {
        alert('Chegou aqui')
    }
    return (
        <Container >
            <InfoProduct>
                <ImageCompany />
                <Info>
                    <NameProduct>{product.name}</NameProduct>
                    <NameCategory>{product.category.name}</NameCategory>
                    <NameCompany>{product.company.name}</NameCompany>
                </Info>
            </InfoProduct>
            <Form submit={handleSubmit} code={code} />
        </Container>
    );
}
