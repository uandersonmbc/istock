import React from 'react';
import { Picker } from 'react-native';

import { Container } from './styles';

export default function Select({ callback }) {
    return (
        <Picker
            selectedValue="java"
            style={{ height: 50, width: 100 }}
            onValueChange={callback}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    );
}
