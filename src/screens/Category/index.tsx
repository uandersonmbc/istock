import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RefreshControl } from 'react-native';
import Api from '../../services/api';
import { InputSearch } from '../../components';

import { Container, Header, ListItem, Text, AddButton } from './styles';

import Item from './Item';

import { Category, CategoryState, Load } from './types';

function ListCategory({ navigation }) {
    const [categories, setCategories] = useState<CategoryState>([]);

    const [loading, setLoading] = useState<Load>(false)

    const loadingCategory = async (page = 1, refresh = true) => {
        try {
            setLoading(true)
            const response = await Api.get('/categories')
            const data = response.data;
            setCategories(data)
        } catch (error) {
            console.log('deu um errro', error)
        } finally {
            setLoading(false)
        }
    }

    const handleNavigation = (navigate: string, value: object) => {
        navigation.navigate(navigate)
    }

    useEffect(() => {
        loadingCategory()
    }, [])

    return (
        <Container>
            <Header>
                <InputSearch
                    drawer={() => navigation.openDrawer()}
                    placeholder="Prucurar por categoria"
                    // onChangeText={handleChange}
                    submit={() => 0}
                />
            </Header>

            <ListItem
                data={categories}
                renderItem={({ item }) => <Item item={item} navigate={handleNavigation} />}
                keyExtractor={(item: Category) => item.name + ''}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={loadingCategory}
                    />
                }
            />
            <AddButton onPress={() => handleNavigation('RegisterCategory', { name: 'uanderson' })}>
                <Text>
                    <Icon name="plus" size={20} />
                </Text>
            </AddButton>
        </Container>
    );
}

export default ListCategory;
