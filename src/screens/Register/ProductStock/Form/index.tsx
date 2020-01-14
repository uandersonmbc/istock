import React from 'react';

import { Schema } from './schema';
import { Formik } from 'formik';

import { Button, Input } from '../../../../components';
import { View, Text } from 'react-native';

function ProductForm({ submit, code }) {
    const INITIAL_VALUES = {
        code,
        value: '',
        quantity: '',
        date: ''
    }

    function t(numero: string) {
        let int = numero.replace(/[\D]+/g, '')

        int = int.replace(/([0-9]{2})$/g, ",$1");
        if (int.length > 6)
            int = int.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        return int;
    }
    return (
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={Schema}
            onSubmit={submit}
        >
            {({ handleChange, errors, handleSubmit, values }) => (
                <View>
                    <Input
                        icon="barcode"
                        placeholder="Código do Produto"
                        keyboardType="numeric"
                        onChangeText={handleChange('code')}
                        value={values.code}
                    />
                    <Text>{errors.code}</Text>
                    <Input
                        icon="money"
                        placeholder="Valor do Produto"
                        keyboardType="decimal-pad"
                        onChangeText={handleChange('value')}
                        value={t(values.value)}
                    />
                    <Text>{errors.value}</Text>
                    <Input
                        placeholder="Valor do Produto"
                        keyboardType="decimal-pad"
                        onChangeText={handleChange('quantity')}
                        value={values.quantity}
                    />
                    <Text>{errors.quantity}</Text>
                    <Button onPress={handleSubmit}>
                        Agora vai
                    </Button>
                </View>
            )}
        </Formik>
    );
}


export default ProductForm;
