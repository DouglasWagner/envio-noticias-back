/* eslint-disable prettier/prettier */
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IEmailListService from '@domain/emailList/interfaces/IEmailListService'

type userType = {
  id: string,
  company_id: string,
}

type HttpRequest = Request & { user: userType }
@injectable()
export class EmailListCreateController
  extends BaseController
  implements IController {
  constructor(
    @inject(tokens.EmailListService)
    private emailListService: IEmailListService,
  ) {
    super()
  }

  async handle(req: HttpRequest, res: Response): Promise<Response> {
    try {
      const emailListRequest = {
        emailAddress: req.body.emailAddress,
        status: 'Ativo',
        user: req.user.id,
        company: req.user.company_id,
      }
      const emailList = await this.emailListService.create(emailListRequest)
      return this.success(res, 'Lista de Emails criada.', emailList)
    } catch (err: any) {
      console.log(err)
      return this.error(res, err.message)
    }
  }
}
