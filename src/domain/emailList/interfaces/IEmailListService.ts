import { EmailList } from '../entities/EmailList.entity'
import IEmailList from './IEmailList'
import UpdateEmailList from './IUpdateEmailList'

export default interface IEmailListService {
  create(emailList: IEmailList): Promise<void>
  list(): Promise<EmailList[]>
  findById(id: string): Promise<EmailList | null>
  update(id: string, emailList: UpdateEmailList): Promise<void>
  delete(id: string): Promise<void>
}
