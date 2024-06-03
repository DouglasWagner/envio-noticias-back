/* eslint-disable prettier/prettier */
import { tokens } from '@di/tokens'
import IEmailListRepository from '@domain/emailList/interfaces/IEmailListRepository'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'

@injectable()
export class EmailListDeleteController
    extends BaseController
    implements IController {
    constructor(
        @inject(tokens.EmailListService)
        private emailListService: IEmailListRepository
    ) {
        super()
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const emailListId = req.params.id
            await this.emailListService.delete(emailListId)
            return this.success(res, 'Lista de Emails excluída com sucesso.', {})

        } catch (err: any) {
            console.log(err)
            return this.error(res, err.message)
        }
    }
}
