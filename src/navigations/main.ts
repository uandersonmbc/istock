import React from 'react';
import { THEME } from './../shared/colors';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Category from './category';
import Product from './product';

import CustomDrawer from './../components/CustomDrawer'

const Main = createAppContainer(
    createDrawerNavigator({
        "Produtos": {
            screen: Product,
        },
        "Categorias": {
            screen: Category,
        },
        "Anotações": {
            screen: Product,
        }
    }, {
        initialRouteName: 'Produtos',
        contentComponent: CustomDrawer,
        contentOptions: {
            activeTintColor: THEME.WHITE,
            inactiveTintColor: THEME.PRIMARY,
            activeBackgroundColor: THEME.SECUNDARY,
            itemsContainerStyle: {
                marginVertical: -4,
            },
            iconContainerStyle: {
                opacity: 1
            }
        },
        drawerWidth: Dimensions.get('window').width * 0.8
    })
);

export default Main;
