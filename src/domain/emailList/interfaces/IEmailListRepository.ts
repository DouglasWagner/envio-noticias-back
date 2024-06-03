/* eslint-disable prettier/prettier */
import { EmailList } from '../entities/EmailList.entity'
export default interface IEmailListRepository {
  save(emailList: EmailList): Promise<EmailList>
  update(emailList: EmailList): Promise<EmailList>
  list(): Promise<EmailList[]>
  delete(id: string): Promise<void>
  listByEmail(emailAddress: string): Promise<EmailList | null>
  findById(id: string): Promise<EmailList | null>
  verifyCompany(emailAddress?: string, company?: string): Promise<EmailList | null>
  listByUser(id: string): Promise<EmailList[]>
}
