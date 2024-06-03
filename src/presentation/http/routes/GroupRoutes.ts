import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class GroupRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.GroupListController)
    private groupListController: IController,

    @inject(tokens.GroupCreateController)
    private groupCreateController: IController
  ) {}

  setup() {
    const router = Router()

    router.get('/', async (req: Request, res: Response) => {
      return await this.groupListController.handle(req, res)
    })

    router.post('/', async (req: Request, res: Response) => {
      return await this.groupCreateController.handle(req, res)
    })

    return router
  }
}
