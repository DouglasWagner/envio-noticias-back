import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import { IGalleryService } from '@domain/gallery/interfaces/IGalleryService'

@injectable()
export class GalleryReleaseDeleteController
  extends BaseController
  implements IController {
  constructor(
    @inject(tokens.GalleryService)
    private galleryService: IGalleryService
  ) {
    super()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const gallery = await this.galleryService.delete(req.params.id)
      return this.success(res, 'Galleria deletada.', gallery)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
