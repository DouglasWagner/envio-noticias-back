/* eslint-disable prettier/prettier */
import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class GalleryReleaseRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.GalleryReleaseDeleteController)
    private galleryReleaseDeleteController: IController
  ) { }

  setup() {
    const router = Router()

    router.delete('/:id', async (req: Request, res: Response) => {
      return await this.galleryReleaseDeleteController.handle(req, res)
    })

    return router
  }
}
