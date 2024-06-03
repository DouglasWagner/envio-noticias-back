import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IReleaseService from '@domain/release/interfaces/IReleaseService'

@injectable()
export class ReleaseUpdateController
  extends BaseController
  implements IController {
  constructor(
    @inject(tokens.ReleaseService)
    private releaseService: IReleaseService
  ) {
    super()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const requestRelease = { ...req.body, ...{ files: req.files } }
      const release = await this.releaseService.update(req.params.id, requestRelease)
      return this.success(res, 'Release atualizada.', release)
    } catch (err: any) {
      console.error(err)
      return this.error(res, err.message)
    }
  }
}
