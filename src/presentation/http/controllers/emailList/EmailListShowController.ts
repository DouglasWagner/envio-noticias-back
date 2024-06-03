/* eslint-disable prettier/prettier */
import { tokens } from '@di/tokens'
import IEmailListService from '@domain/emailList/interfaces/IEmailListService'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'

@injectable()
export class EmailListShowController
  extends BaseController
  implements IController {
  constructor(
    @inject(tokens.EmailListService)
    private emailListService: IEmailListService
  ) {
    super()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {

      const reqId = req.params.id

      const emailLists = await this.emailListService.findById(reqId)

      if (!emailLists) {
        throw new Error('Lista de e-mails não encontrada.');
      }

      return this.success(res, 'Listas de Emails recuperadas.', emailLists)
    } catch (err: any) {
      console.log(err)
      return this.error(res, err.message)
    }
  }
}
