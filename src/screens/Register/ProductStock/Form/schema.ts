import * as Yup from 'yup';

export const Schema = Yup.object().shape({
    code: Yup.string()
        .required('Required'),
    value: Yup.string()
        .required('Required'),
    quantity: Yup.string()
        .required('Required'),
    date: Yup.string()
        .required('Required'),
});
