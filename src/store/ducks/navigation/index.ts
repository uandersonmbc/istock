import { Reducer } from 'redux';

import { NavigationState, NavigationAction } from './types';


const INITIAL_STATE: NavigationState = {
    navigate: 'LoadInitial'
};

const reducer: Reducer<NavigationState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationAction.ALTER_NAVIGATE:
            return { navigate: action.payload };
        default:
            return state;
    }
};

export default reducer;
