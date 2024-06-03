import ISendMailService from '../interfaces/ISendMailService'
import { IMailProvider } from '../interfaces/IMailProvider'
import IUserRepository from '@domain/authentication/interfaces/IUserRepository'
import ICreateSendMail from '../interfaces/ICreateSendMail'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import { HtmlHelper } from '../helper/htmlHelper'
import CompanyRepository from '@domain/company/repositories/CompanyRepository'

@injectable()
export class SendMailTestService implements ISendMailService {
  constructor(
    @inject(tokens.MailsenderProvider) private mailProvider: IMailProvider,
    @inject(tokens.UserRepository) private userRepository: IUserRepository,
    @inject(tokens.HtmlHelper) private htmlHelper: HtmlHelper,
    @inject(tokens.CompanyRepository)
    private companyRepository: CompanyRepository
  ) {}
  async create(mailSend: ICreateSendMail): Promise<void> {
    const user = await this.userRepository.findOneById(mailSend.user)
    if (!user) {
      throw new Error('User not found')
    }

    const company = await this.companyRepository.findOneByUser(user.id)

    if (!company) {
      throw new Error('Company not found')
    }

    const htmlRelease = this.htmlHelper.generateHtmlForRelease({
      ...mailSend,
      company,
    })

    await this.mailProvider.sendEmail(
      user.email,
      `${company?.name} lhe enviou uma release [Ticker.press.NEWS]`,
      htmlRelease
    )
  }
}
