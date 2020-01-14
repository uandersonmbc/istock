import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Category from './../screens/Category';
import RegisterCategory from './../screens/Register/Category';
import EditCategory from '../screens/Edit/Category';

const categoryRoutes = createStackNavigator({
    Category,
    RegisterCategory,
    EditCategory,
}, {
    initialRouteName: 'Category',
    headerMode: 'none',
});

export default createAppContainer(categoryRoutes);
