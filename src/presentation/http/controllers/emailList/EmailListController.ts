/* eslint-disable prettier/prettier */
import { tokens } from '@di/tokens'
import IEmailListRepository from '@domain/emailList/interfaces/IEmailListRepository'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'

@injectable()
export class EmailListController
    extends BaseController
    implements IController {
    constructor(
        @inject(tokens.EmailListService)
        private emailListService: IEmailListRepository
    ) {
        super()
    }

    async handle(_req: Request, res: Response): Promise<Response> {
        try {
            const emailLists = await this.emailListService.list()
            return this.success(res, 'Listas de Emails recuperadas.', emailLists)
        } catch (err: any) {
            console.log(err)
            return this.error(res, err.message)
        }
    }
}
