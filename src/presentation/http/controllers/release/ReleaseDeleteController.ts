import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IReleaseService from '@domain/release/interfaces/IReleaseService'

@injectable()
export class ReleaseDeleteController
  extends BaseController
  implements IController
{
  constructor(
    @inject(tokens.ReleaseService)
    private releaseService: IReleaseService
  ) {
    super()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const release = await this.releaseService.delete(req.params.id)
      return this.success(res, 'Release deletada.', release)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
