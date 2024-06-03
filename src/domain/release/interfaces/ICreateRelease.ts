import { IFile } from "@shared/interfaces/IFile"
export default interface ICreateRelease {
  title: string
  subtitle: string
  sector: string
  hashtags: string
  call: string
  id_group_customer: string
  text: string
  image: string | null
  files?: IFile[]
  status: string
  group: string
  user_id_creation: number
  user_id_last_update: number
}
