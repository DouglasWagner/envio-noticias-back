import * as yup from 'yup'

const ProfileClientRequestSchema = yup.object().shape({
  client_name: yup.string().required(),
  client_email: yup.string().required(),
  client_about: yup.string().required(),
  client_image_path: yup.string().required(),
  client_id_sectors: yup.string().required(),
  // area: yup.string().required(),
})

export { ProfileClientRequestSchema }
