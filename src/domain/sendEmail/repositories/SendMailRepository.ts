/* eslint-disable prettier/prettier */
import { injectable } from 'tsyringe'
import AppDataSource from '@infrastructure/database/postgresql/AppDataSource'
import { Repository } from 'typeorm'
import { SendEmail } from '../entities/SendEmail.entity'
import ISendMailRepository from '../interfaces/ISendMailRepository'

@injectable()
export default class SendEmailRepository implements ISendMailRepository {
  private sendEmailRepository: Repository<SendEmail>

  constructor() {
    this.sendEmailRepository = AppDataSource.getRepository(SendEmail)
  }

  async save(sendEmail: SendEmail): Promise<SendEmail> {
    return await this.sendEmailRepository.save(sendEmail)
  }

}
