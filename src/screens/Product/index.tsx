import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RefreshControl } from 'react-native';
import Api from '../../services/api';
import { InputSearch } from '../../components';

import { Container, Header, ListItem, Text, AddButton } from './styles';

import Item from './Item';

import { ProductState, Product } from './types';
function ListProduct(props) {
    const [products, setProducts] = useState<ProductState>({
        total: 0,
        perPage: 20,
        page: 1,
        lastPage: 1,
        data: []
    });

    const [loading, setLoading] = useState(false)

    const loadingProduct = async (page = 1, refresh = true) => {
        try {
            setLoading(true)
            const response = await Api.get(`/products?page=${page}`)
            if (refresh) {
                const data = response.data;
                setProducts(data)
            } else {
                const { data, ...rest } = response.data
                setProducts({
                    data: [...products.data, ...data],
                    ...rest,
                    page
                })
            }
        } catch (error) {
            console.log('deu um errro', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadingProduct()
    }, []);

    const handleChange = (string: string) => {

    }

    const handleNavigation = (navigate: string, value: object) => {
        props.navigation.navigate(navigate, value)
    }

    const loadMore = () => {
        const { page, lastPage } = products;
        if (page === lastPage) return;
        const pageNumber = page + 1;
        loadingProduct(pageNumber, false);
    }

    return (
        <Container>
            <Header>
                <InputSearch
                    drawer={() => props.navigation.openDrawer()}
                    placeholder="Prucurar por produto"
                    onChangeText={handleChange}
                    submit={() => 0}
                />
            </Header>

            <ListItem
                data={products.data}
                renderItem={({ item }) => <Item item={item} navigate={handleNavigation} />}
                keyExtractor={(item: Product) => item.id + ''}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={loadingProduct}
                    />
                }
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
            <AddButton onPress={() => handleNavigation('RegisterProduct', {})}>
                <Text>
                    <Icon name="plus" size={20} />
                </Text>
            </AddButton>
        </Container>
    );
}

export default ListProduct;
