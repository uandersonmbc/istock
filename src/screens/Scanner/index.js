import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, CardActions, ViewCode, ViewButtons, Texto, Button } from './styles';

import { StackActions, NavigationActions } from 'react-navigation';

function Scanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [code, setCode] = useState({
        code: '000000000',
        type: ''
    });

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        let isNumber = /^\d+$/.test(data);

        if (isNumber) {
            setScanned(true);
            setCode({
                code: data,
                type
            })
        } else {
            setScanned(true);
            alert('Apenas código de barras númerico')
        }
    }

    const handleclear = () => {
        setScanned(false)
        setCode({
            code: '000000000',
            type: ''
        })
    }

    const navigateAction = NavigationActions.navigate({
        routeName: 'Produtos',
        action: NavigationActions.navigate({
            routeName: 'RegisterProductStock',
            params: {
                code: code.code,
                product: navigation.state.params
            },
        }),
    });

    const registerProductStock = () => {
        if (code.code !== '000000000') {
            navigation.dispatch(StackActions.popToTop());
            navigation.dispatch(navigateAction);
        }
    }

    return (
        <Container>
            <BarCodeScanner
                style={{ flex: 1, width: Dimensions.get('window').width * 1.1, marginLeft: -10 }}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
            <Icon name="close" onPress={() => navigation.popToTop()} size={30} style={{ position: "absolute", color: "#FFF", top: 30, right: 20, zIndex: 1 }} />
            <CardActions>
                <ViewCode>
                    <Texto>{code.code}</Texto>
                </ViewCode>
                <ViewButtons>
                    <Button
                        disabled={!scanned}
                        onPress={registerProductStock}
                        style={{ backgroundColor: '#00AFB5', opacity: scanned ? 1 : 0.3 }}>
                        <Texto style={{ color: '#FFF' }}><Icon name="plus" size={30} /></Texto>
                    </Button>
                    <Button
                        onPress={handleclear}
                        disabled={!scanned}
                        style={{ backgroundColor: '#BA1200', opacity: scanned ? 1 : 0.3 }}
                    >
                        <Texto style={{ color: '#FFF' }}><Icon name="undo" size={30} /></Texto>
                    </Button>
                </ViewButtons>
            </CardActions>
        </Container >
    );
}

export default Scanner;
