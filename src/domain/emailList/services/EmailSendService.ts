/* eslint-disable prettier/prettier */
import {  injectable } from 'tsyringe'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

@injectable()
export default class EmailSendService {

    sendEmail(body: any) {
       try {
            const mailerSend = new MailerSend({
                apiKey: process.env.TOKEN_KEY || '',
            })
            const sentFrom = new Sender("rodrigo@ticker.press", "Rodrigo")
            const sendTo = [new Recipient("vinicius.soethe@boxti.com.br", "Vinicius Soethe")]
            const emailParams = new EmailParams()
                .setFrom(sentFrom)
                .setTo(sendTo)
                .setReplyTo(sentFrom)
                .setSubject("Rodrigo Heinzelmann Luckow lhe enviou uma release [Ticker.press.NEWS]")
                .setHtml(`
                    <strong>
                        <br> ${body.release.title}
                    </strong>
                `)
            mailerSend.email.send(emailParams)
        }catch (error) {
            console.log(error)
        }
    }
}