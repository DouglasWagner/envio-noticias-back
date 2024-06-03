import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject,injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class SendReleaseToMeRoutes implements IBaseRoute{
  constructor(
    @inject(tokens.SendReleaseToMeSendController)
    private sendReleaseToMeSendController: IController
  ) {}

  setup() {
    const router = Router()
    router.post(
      '/',
      async (req: Request, res: Response) => {
        return await this.sendReleaseToMeSendController.handle(req, res)
    })

    return router
  }
}
