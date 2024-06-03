/* eslint-disable prettier/prettier */
import { injectable } from 'tsyringe'
import AppDataSource from '@infrastructure/database/postgresql/AppDataSource'
import IEmailListRepository from '../interfaces/IEmailListRepository'
import { EmailList } from '../entities/EmailList.entity'
import { Repository } from 'typeorm'

@injectable()
export default class EmailListRepository implements IEmailListRepository {
  private emailListRepository: Repository<EmailList>

  constructor() {
    this.emailListRepository = AppDataSource.getRepository(EmailList)
  }

  async save(emailList: EmailList): Promise<EmailList> {
    return await this.emailListRepository.save(emailList)
  }

  async list(): Promise<EmailList[]> {
    return await this.emailListRepository.find()
  }

  async delete(id: string): Promise<void> {
    await this.emailListRepository.delete(id)
  }

  async update(emailList: EmailList): Promise<EmailList> {
    return await this.emailListRepository.save(emailList)
  }
  async listByEmail(emailAddress: string): Promise<EmailList | null> {
    return await this.emailListRepository.findOne({ where: { emailAddress } })
  }

  async listByUser(id: string): Promise<EmailList[]> {
    return await this.emailListRepository.find({ where: { 
      users: { id: id },
      status: "Ativo"
    },
  })
  }

  async findById(id: string): Promise<EmailList | null> {
    return await this.emailListRepository.findOne({ where: { id } })
  }

  async verifyCompany(emailAddress: string, company: string): Promise<EmailList | null> {
    return await this.emailListRepository.findOne({
      where: {
        emailAddress: emailAddress,
        company: { id: company },
      },
    })
  } 
}
