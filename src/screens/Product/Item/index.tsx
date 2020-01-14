import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Info,
    DivIcon,
    Button,
    Image,
    Title,
    Div,
    Description,
    ViewImage
} from './styles';

import natura from './../../../assets/images/natura.jpg';
import boticario from './../../../assets/images/boticario.jpg';
import avon from './../../../assets/images/avon.png';
import jequiti from './../../../assets/images/jequiti.png';

const companyImages = [
    { slug: 'natura', image: natura },
    { slug: 'jequiti', image: jequiti },
    { slug: 'avon', image: avon },
    { slug: 'boticario', image: boticario }
]

export default function Item({ item, navigate }) {
    const image = companyImages.filter(company => company.slug === item.company.slug)
    return (
        <Container>
            <ViewImage>
                <Image source={image[0].image} />
            </ViewImage>
            <Info>
                <Div>
                    <Title>{item.name}</Title>
                    <Description>{item.category.name}</Description>
                </Div>
                <DivIcon>
                    <Button onPress={() => navigate('Scanner', item)}>
                        <Icon name="plus" size={30} style={{ color: '#2B9720' }} />
                    </Button>
                    <Button onPress={() => navigate('ProductStock', item.id)}>
                        <Icon name="list-alt" size={30} style={{ paddingLeft: 20, color: '#78E3FD' }} />
                    </Button>
                </DivIcon>
            </Info>
        </Container>
    );
}
