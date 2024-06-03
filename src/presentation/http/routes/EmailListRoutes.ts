/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe'
import { Request, Response, Router } from 'express'
import { validateSchemaMiddleware } from '../middlewares/ValidateSchemaMiddleware'
import { emailListCreateSchema } from '../requestSchemas/EmailList/EmailListCreateRequestSchema'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { emailListUpdateSchema } from '../requestSchemas/EmailList/EmailListUpdateRequestSchema'
import IBaseRoute from '@shared/interfaces/IBaseRoute'

@injectable()
export class EmailListRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.EmailListController)
    private emailListController: IController,

    @inject(tokens.EmailListCreateController)
    private emailListCreateController: IController,

    @inject(tokens.EmailListDeleteController)
    private emailListDeleteController: IController,

    @inject(tokens.EmailListUpdateController)
    private emailListUpdateController: IController,

    @inject(tokens.EmailListShowController)
    private emailListShowController: IController
  ) { }

  setup() {
    const router = Router()
    router.post(
      '/',
      validateSchemaMiddleware(emailListCreateSchema),
      async (req: Request, res: Response) => {
        return await this.emailListCreateController.handle(req, res)
      }
    )

    router.get('/', async (req: Request, res: Response) => {
      return await this.emailListController.handle(req, res)
    })

    router.get('/:id', async (req: Request, res: Response) => {
      return await this.emailListShowController.handle(req, res)
    })

    router.delete('/:id', async (req: Request, res: Response) => {
      return await this.emailListDeleteController.handle(req, res)
    })

    router.put(
      '/:id',
      validateSchemaMiddleware(emailListUpdateSchema),
      async (req: Request, res: Response) =>
        await this.emailListUpdateController.handle(req, res)
    )

    return router
  }
}
