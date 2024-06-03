/* eslint-disable prettier/prettier */
import { tokens } from '@di/tokens'
import IEmailListService from '@domain/emailList/interfaces/IEmailListService'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'

@injectable()
export class EmailListUpdateController
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
      const emailListId = req.params.id;

      const currentEmailList = await this.emailListService.findById(emailListId);

      if (!currentEmailList) {
        throw new Error('Email não encontrada.');
      }

      const updatedList = await this.emailListService.update(emailListId, req.body);

      return this.success(res, 'Lista de Emails atualizada.', updatedList);
    } catch (err: any) {
      console.log(err);
      return this.error(res, err.message);
    }
  }
}
