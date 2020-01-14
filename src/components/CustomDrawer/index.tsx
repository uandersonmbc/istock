import React from 'react';
import { useDispatch } from 'react-redux';
import { DrawerItems } from 'react-navigation-drawer';
import { onSignOut } from './../../services/auth';
import { NavigationAction } from './../../store/ducks/navigation/types';
import {
    Container,
    ScrollView,
    LogoContainer,
    Logo,
    Exit,
    ButtonExit
} from './styles';

function CustomDrawer(props) {
    const dispatch = useDispatch();
    const signOut = async () => {
        await onSignOut();
        dispatch({
            type: NavigationAction.ALTER_NAVIGATE,
            payload: 'SignIn'
        })
    }
    return (
        <Container>
            <LogoContainer>
                <Logo>IStock</Logo>
            </LogoContainer>
            <ScrollView>
                <DrawerItems {...props} />
                <ButtonExit onPress={signOut}>
                    <Exit>Sair</Exit>
                </ButtonExit>
            </ScrollView>
        </Container>
    );
}

export default CustomDrawer;
