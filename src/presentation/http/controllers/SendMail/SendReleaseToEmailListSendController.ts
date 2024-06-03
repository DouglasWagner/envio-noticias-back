import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject ,injectable } from 'tsyringe'
import BaseController from '../BaseController'
import { tokens } from '@di/tokens'
import ISendMailService from '@domain/sendEmail/interfaces/ISendMailService'

type userType = {
  id: string,
}

type HttpRequest = Request & { user: userType }

@injectable()
export class SendReleaseToEmailListSendController
    extends BaseController
    implements IController
{
    constructor(
    @inject(tokens.SendMailService)
    private emailListService: ISendMailService
    ) {
        super()
    }
    async handle(req: HttpRequest, res: Response): Promise<Response> {
       try {
          const sendMailRequest = {
            id: req.body.id,
            title: req.body.title,
            subtitle: req.body.subtitle,
            call: req.body.call,
            text: req.body.text,
            image: req.body.image,
            user: req.user.id,
           }
          await this.emailListService.create(sendMailRequest)
          return this.success(res, "Release enviada com sucesso para a lista de emails." , {})
        } catch (error) {
          return this.error(res, "Erro ao enviar release.")
        }
    } 
} 
