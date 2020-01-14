import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Main from './src';
function App() {
    return (
        <Provider store={store}>
            <StatusBar hidden barStyle="light-content" />
            <Main />
        </Provider>
    );
}

export default App;
