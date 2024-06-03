import * as yup from 'yup'

const emailListUpdateSchema = yup.object().shape({
    emailAddress: yup.string().required(),
    status: yup.string().oneOf(['ativo', 'inativo', 'excluído']),
})

export { emailListUpdateSchema }
