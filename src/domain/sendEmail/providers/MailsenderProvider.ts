import { injectable } from "tsyringe";
import { IMailProvider } from "../interfaces/IMailProvider";
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'
@injectable()
export class MailsenderProvider implements IMailProvider {
  private mailerSend:any
  private senderEmail:any
  private senderName:any
  constructor(){
    this.mailerSend = new MailerSend({
      apiKey: process.env.TOKEN_KEY || '',
    })
    this.senderEmail = process.env.SENDER_EMAIL
    this.senderName = process.env.SENDER_NAME
  }

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const sentFrom = new Sender(this.senderEmail, this.senderName)
    const recipient = [new Recipient(to)]
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipient)
      .setReplyTo(sentFrom)
      .setSubject(subject)
      .setHtml(body)
    await this.mailerSend.email.send(emailParams)
  }
}
