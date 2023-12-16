import * as yup from 'yup'

export const userBodyValidator = yup.object({
    name: yup.string().required('name is required'),
    email: yup.string().required('email is required').email('invalid format email'),
    password: yup.string().required('password is required'),
    photo: yup.string()
})