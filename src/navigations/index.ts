import { createAppContainer } from 'react-navigation';
import { useSelector } from 'react-redux';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import SignIn from './../screens/SignIn';
import LoadInitial from './../screens/LoadInitial';
import Main from './main';

export default (initial: string) => createAppContainer(createAnimatedSwitchNavigator({
    LoadInitial,
    SignIn,
    Main
}, {
    initialRouteName: initial,
}));

