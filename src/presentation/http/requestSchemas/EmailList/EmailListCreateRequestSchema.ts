import * as yup from 'yup'

const emailListCreateSchema = yup.object().shape({
    emailAddress: yup.string().required(),
})

export { emailListCreateSchema }
