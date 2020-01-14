import React, { useEffect } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

import { isSignedIn } from './../../services/auth';

import { Container } from './styles';

export default function LoadInitial({ navigation }) {

    const is = async () => {
        if (await isSignedIn()) {
            const navigateAction = NavigationActions.navigate({
                routeName: 'Main',
            });
            navigation.dispatch(StackActions.popToTop());
            navigation.dispatch(navigateAction);
        } else {
            const navigateAction = NavigationActions.navigate({
                routeName: 'SignIn',
            });
            navigation.dispatch(StackActions.popToTop());
            navigation.dispatch(navigateAction);
        }
    }
    useEffect(() => {
        is()
    });
    return (
        <Container />
    );
}
