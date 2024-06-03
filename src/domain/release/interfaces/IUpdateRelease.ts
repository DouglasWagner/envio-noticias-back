import { IFile } from "@shared/interfaces/IFile"

export default interface IUpdateRelease {
  title?: string
  subtitle?: string
  sector?: string
  hashtags?: string
  call?: string
  id_group_customer?: string
  text?: string
  image?: string
  files?: IFile[]
  status?: string
  user_id_last_update: number
}
