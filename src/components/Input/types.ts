import { TextInputProps } from 'react-native';
export interface Props extends TextInputProps {
    icon?: string;
    password?: boolean;
}

export type See = true | false;
