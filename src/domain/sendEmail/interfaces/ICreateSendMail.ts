import { Company } from "@domain/company/entities/Company.entity"
export default interface ICreateSendMail {
  id: string
  title: string
  subtitle: string
  call: string
  text: string
  image: string | null
  user: string
  company?: Company | null
}
