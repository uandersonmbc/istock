import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Product from './../screens/Product';
import Scanner from './../screens/Scanner';
import ProductStock from './../screens/ProductStock';
import RegisterProductStock from './../screens/Register/ProductStock';
import RegisterProduct from './../screens/Register/Product';

const productRoutes = createStackNavigator({
    Product,
    Scanner,
    ProductStock,
    RegisterProduct,
    RegisterProductStock,
}, {
    initialRouteName: 'Product',
    headerMode: 'none'
});

export default createAppContainer(productRoutes);
