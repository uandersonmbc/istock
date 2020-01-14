import React, { useState } from 'react';

import {
    Container,
    Icons,
    TextInput,
    ContainerSearch,
    TextInputSearch
} from './styles';

import { Props, See } from './types';

export const Input: React.SFC<Props> = (props) => {
    const [see, setSee] = useState<See>(true);
    return (
        <Container>
            {props.icon ? (<Icons
                name={props.icon}
            />) : undefined}
            {props.password ? (
                <TextInput {...props} secureTextEntry={see} />
            ) : (
                    <TextInput {...props} />
                )}

            {props.password ? (<Icons
                onPress={() => setSee(see ? false : true)}
                name={see ? 'eye' : 'eye-slash'}
            />) : undefined}
        </Container>
    );
}

export const InputSearch = ({ drawer, submit, ...props }) => {
    const [send, setSend] = useState(false);
    return (
        <ContainerSearch>
            <Icons
                onPress={drawer}
                name="bars"
                size={20}
                style={{ padding: 12 }}
                color="#123456"
            />
            <TextInputSearch
                {...props}
                onBlur={() => setSend(false)}
                onFocus={() => setSend(true)}
            />

            <Icons
                onPress={send ? submit : undefined}
                name={send ? 'send' : 'search'}
                size={20}
                style={{ padding: 12 }}
                color={send ? '#123456' : '#ccc'} />
        </ContainerSearch>
    );
}
