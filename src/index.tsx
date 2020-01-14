import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import createNavigator from './navigations';
import { ApplicationState } from './store';
import { NavigationState } from './store/ducks/navigation/types';

function Main() {
    let state = {
        navigate: ''
    }

    state = useSelector<ApplicationState, NavigationState>(state => state.navigation)

    const Navigator = createNavigator(state.navigate);
    return (
        <Navigator />
    );
}

export default Main;
