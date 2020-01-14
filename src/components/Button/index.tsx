import React from 'react';
import { ActivityIndicator } from 'react-native';

import { _Button, Text, LoadingButton } from './styles';
import { Props } from './types';

export const Button = (props) => {
    return props.loading ? (
        <LoadingButton variant={props.variant}>
            <ActivityIndicator size="large" color="#FFF" />
        </LoadingButton >

    ) : (
            <_Button {...props}>
                <Text>{props.children}</Text>
            </_Button >
        );
}
