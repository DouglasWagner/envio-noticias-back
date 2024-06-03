import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IReleaseService from '@domain/release/interfaces/IReleaseService'

@injectable()
export class ReleaseListController
  extends BaseController
  implements IController
{
  constructor(
    @inject(tokens.ReleaseService)
    private releaseService: IReleaseService
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const release = await this.releaseService.list()
      return this.success(res, 'Release listagem', release)
    } catch (err: any) {
      console.error(err)
      return this.error(res, err.message)
    }
  }
}
