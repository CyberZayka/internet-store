import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Введите свое имя"),
    surname: yup
        .string()
        .required("Введите свою фамилию"),
    age: yup
        .number()
        .required("Введите свой возраст"),
    address: yup
        .string()
        .required("Введите свой адрес"),
    tel: yup
        .string()
        .required("Введите свой телефон")
})

export default validationSchema;