import React, { useState } from 'react';
import { onSignIn } from './../../services/auth';
import Api from './../../services/api';
import { Button, Input } from '../../components';
import { Schema } from './schema';
import { Forme, ScrollView, TextError } from './styles';

export default function Form({ navigation }) {
    const INITIAL_VALUES = {
        email: '',
        password: '',
    }
    const [loading, setLoading] = useState(false)
    return (
        <Forme
            initialValues={INITIAL_VALUES}
            validationSchema={Schema}
            onSubmit={async (values) => {
                try {
                    setLoading(true)
                    const response = await Api.post('/login', values);
                    await onSignIn(response.data.token)
                    navigation.navigate('Main');
                } catch (error) {
                    alert('Usuário ou senha incorretas')
                } finally {
                    setLoading(false)
                }
            }}
        >
            {({ handleChange, errors, touched, handleSubmit, values }) => (
                <ScrollView>
                    <Input
                        placeholder="E-mail"
                        icon="envelope"
                        onChangeText={handleChange('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />
                    <TextError>{touched.email ? errors.email : ''}</TextError>
                    <Input
                        placeholder="Senha"
                        icon="key"
                        onChangeText={handleChange('password')}
                        value={values.password}
                        password={true}
                        keyboardType="default"
                    />
                    <TextError>{touched.password ? errors.password : ''}</TextError>
                    <Button variant="SECUNDARY" loading={loading} onPress={handleSubmit}>Entrar</Button>
                </ScrollView>
            )}
        </Forme>
    );
}
