/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe'
import { EmailList } from '../entities/EmailList.entity'
import IEmailListService from '../interfaces/IEmailListService'
import IEmailList from '../interfaces/IEmailList'
import { Repository } from 'typeorm'
import IEmailListRepository from '../interfaces/IEmailListRepository'
import UpdateEmailList from '../interfaces/IUpdateEmailList'
import { tokens } from '@di/tokens'
import { User } from '@domain/authentication/entities/User.entity'
import AppDataSource from '@infrastructure/database/postgresql/AppDataSource'
import { Company } from '@domain/company/entities/Company.entity'
import * as crypto from 'crypto'
@injectable()
export default class EmailListService implements IEmailListService {
  public userRepository: Repository<User>
  public companyRepository: Repository<Company>
  constructor(
    @inject(tokens.EmailListRepository)
    private emailListRepository: IEmailListRepository,
  ) {
    this.userRepository = AppDataSource.getRepository(User)
    this.companyRepository = AppDataSource.getRepository(Company)
  }
  async create(emailAddressRequest: IEmailList): Promise<void> {
    const user = await this.userRepository.findOneById(emailAddressRequest.user);
    const company = await this.companyRepository.findOneById(emailAddressRequest.company);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    if (!company) {
      throw new Error('Empresa não encontrada');
    }

    const regex = /[\w.-]+@[\w.-]+\.[\w.-]+/g;
    const emails = emailAddressRequest.emailAddress.match(regex);

    // Salvando os Emails Válidos
    const invalidEmails: string[] = [];
    let resultado
    try {
      for (const email of emails!) {
        const existingEmail = await this.emailListRepository.verifyCompany(email, company.id);
        if (existingEmail || !isValidEmailFormat(email)) {
          invalidEmails.push(email);
        } else {
          const hashMailList = company.id + email;
          const hash = crypto.createHash('sha256').update(hashMailList).digest('hex');

          const emailList = new EmailList();
          emailList.company = company;
          emailList.emailAddress = email;
          emailList.hashMailList = hash;
          emailList.status = emailAddressRequest.status;
          emailList.users = user;

          resultado = await this.emailListRepository.save(emailList);
        }
      } 

    } catch (e: any) {
        throw new Error("Algum errou ocorreu: Email invalido")
    }

    if(resultado && invalidEmails.length > 0){
      throw new Error(`Emails cadastrados, porém existem algum(s) já cadastrado(s) para essa empresa ou é(são) inválido(s): ${invalidEmails.join(', ')}`)
    }

    if (invalidEmails.length > 0) {
      throw new Error(`Email já está cadastrado para essa empresa ou é invalido: ${invalidEmails.join(', ')}`);
    }
  }

  async list(): Promise<EmailList[]> {
    return await this.emailListRepository.list()
  }

  async delete(id: string): Promise<void> {
    return await this.emailListRepository.delete(id)
  }

  async update(
    id: string,
    emailList: UpdateEmailList
  ): Promise<void> {
    try {
    const verifyCompany = await this.emailListRepository.verifyCompany(
    emailList.emailAddress,
    emailList.company
    )

    if (verifyCompany) {
      throw new Error('Email já cadastrado para essa Empresa')
    }

    if (!isValidEmailFormat(emailList.emailAddress!)) {
      throw new Error('Este email é invalido')
    }

    const existingEmailList = (await this.emailListRepository.findById(id)) as EmailList
    existingEmailList.emailAddress = emailList.emailAddress
    await this.emailListRepository.save(existingEmailList)
    } catch (error) {
      throw new Error('Erro ao salvar email.')
    }

  }

  async findById(id: string): Promise<EmailList | null> {

    const existingEmailList = await this.emailListRepository.findById(id)

    if (!existingEmailList) {
      throw new Error('Não encontrado')
    }

    return existingEmailList
  }
}
function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
