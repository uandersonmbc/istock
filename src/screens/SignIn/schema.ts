import * as Yup from 'yup';

export const Schema = Yup.object().shape({
    email: Yup.string()
        .email('Digite um email válido')
        .required('O E-mail é obrigatorio.'),
    password: Yup.string()
        .min(6, 'Digite no mínimo 6 caracteres')
        .required('A senha é obrigatoria.'),
});
