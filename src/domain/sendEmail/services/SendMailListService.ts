import ISendMailService from "../interfaces/ISendMailService";
import { IMailProvider } from "../interfaces/IMailProvider";
import IUserRepository from "@domain/authentication/interfaces/IUserRepository";
import ICreateSendMail from "../interfaces/ICreateSendMail";
import IEmailListRepository from "@domain/emailList/interfaces/IEmailListRepository";
import IReleaseRepository from "@domain/release/interfaces/IReleaseRepository";
import ISendMailRepository from "../interfaces/ISendMailRepository";
import { inject, injectable } from "tsyringe";
import { tokens } from "@di/tokens";
import { SendEmail } from "../entities/SendEmail.entity";
import CompanyRepository from "@domain/company/repositories/CompanyRepository";
import { HtmlHelper } from "../helper/htmlHelper";

@injectable()
export class SendMailService implements ISendMailService {
  constructor(
    @inject(tokens.SendEmailRepository) private sendMailRepository: ISendMailRepository,
    @inject(tokens.MailsenderProvider) private mailProvider: IMailProvider,
    @inject(tokens.UserRepository) private userRepository: IUserRepository,
    @inject(tokens.ReleaseRepository) private releaseRepository: IReleaseRepository,
    @inject(tokens.EmailListRepository) private emailListRepository: IEmailListRepository,
    @inject(tokens.CompanyRepository) private companyRepository: CompanyRepository,
    @inject(tokens.HtmlHelper) private htmlHelper: HtmlHelper,
  ){}

  async create(mailSend: ICreateSendMail): Promise<void> {
    const user = await this.userRepository.findOneById(mailSend.user);
    const release = await this.releaseRepository.findOneById(mailSend.id)

    if(!user){
      throw new Error("User not found")
    }

    if(!release){
      throw new Error("Release not found")
    }

    const company = await this.companyRepository.findOneByUser(user.id)

    const mailList = await this.emailListRepository.listByUser(user.id)

    mailList.map(async(mail) => {
      const sendMail = new SendEmail()
      sendMail.users = user
      sendMail.emailList = mail
      sendMail.release = release
      await this.sendMailRepository.save(sendMail)
      const htmlRelease = this.htmlHelper.generateHtmlForRelease({...mailSend, company})
      await this.mailProvider.sendEmail(
        mail.emailAddress!,
        `${company?.name} lhe enviou uma release [Ticker.press.NEWS]`,
        htmlRelease
      )
    })
  }
}
