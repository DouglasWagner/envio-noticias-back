import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import IController from '@shared/interfaces/IController'
import { Request, Response, Router } from 'express'
import IBaseRoute from '@shared/interfaces/IBaseRoute'

@injectable()
export class SectorRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.SectorGetController)
    private sectorGetController: IController
  ) {}

  setup() {
    const router = Router()

    router.get('/get_all_sectors', async (req: Request, res: Response) => {
      return await this.sectorGetController.handle(req, res)
    })

    return router
  }
}
