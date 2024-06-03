import * as yup from 'yup'

const releaseCreateRequestSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  sector: yup.string().required(),
  hashtags: yup.string().required(),
  call: yup.string().required(),
  text: yup.string().required(),
  image: yup.string().optional(),
})

export { releaseCreateRequestSchema }
