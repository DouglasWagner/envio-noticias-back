import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import multer from 'multer'
import { validateSchemaMiddleware } from '../middlewares/ValidateSchemaMiddleware'
import { releaseCreateRequestSchema } from '../requestSchemas/release/ReleaseCreateRequestSchema'
import { adaptMulter } from '../middlewares/multer'

@injectable()
export class ReleaseRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.ReleaseCreateController)
    private releaseCreateController: IController,

    @inject(tokens.ReleaseListController)
    private releaseListController: IController,

    @inject(tokens.ReleaseUpdateController)
    private releaseUpdateController: IController,

    @inject(tokens.ReleaseDeleteController)
    private releaseDeleteController: IController,

    @inject(tokens.ReleaseImagesCreateController)
    private releaseImagesCreateController: IController
  ) { }

  setup() {
    const router = Router()
    const storage = multer.memoryStorage()
    const upload = multer({ storage })

    router.post(
      '/',
      adaptMulter,
      validateSchemaMiddleware(releaseCreateRequestSchema),
      async (req: Request, res: Response) => {
        return await this.releaseCreateController.handle(req, res)
      }
    )

    router.get('/', async (req: Request, res: Response) => {
      return await this.releaseListController.handle(req, res)
    })

    router.put(
      '/:id',
      adaptMulter,
      validateSchemaMiddleware(releaseCreateRequestSchema),
      async (req: Request, res: Response) => {
        return await this.releaseUpdateController.handle(req, res)
      }
    )

    router.delete('/:id', async (req: Request, res: Response) => {
      return await this.releaseDeleteController.handle(req, res)
    })

    router.post(
      '/upload',
      upload.any(),
      async (req: Request, res: Response) => {
        return await this.releaseImagesCreateController.handle(req, res)
      }
    )

    return router
  }
}
