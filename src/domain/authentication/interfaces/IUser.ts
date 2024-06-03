import { Company } from '@domain/company/entities/Company.entity'
import { Sector } from '@domain/sectors/entities/Sector.entity'

export default interface IUser {
  name: string
  email: string
  password: string
  bio?: string
  mobile_phone?: string
  avatar_url?: string
  company: Company
  sector: Sector
}
