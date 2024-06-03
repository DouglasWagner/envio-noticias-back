import { NextFunction, Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import { Config } from '@config/Config'
import { DocsController } from '@presentation/http/controllers/DocsController'

import IMiddleware from '@shared/interfaces/IMiddleware'
import IBaseRoute from '@shared/interfaces/IBaseRoute'

@injectable()
export class Routes {
  constructor(
    @inject(tokens.Config)
    private config: Config,

    @inject(tokens.DocsController)
    private docsController: DocsController,

    @inject(tokens.AuthenticationRoutes)
    private authenticationRoutes: IBaseRoute,

    @inject(tokens.AuthenticationMiddleware)
    private authenticationMiddleware: IMiddleware,

    @inject(tokens.CompanyRoutes)
    private companyRoutes: IBaseRoute,

    @inject(tokens.UserRoutes)
    private userRoutes: IBaseRoute,

    @inject(tokens.SectorRoutes)
    private sectorRoutes: IBaseRoute,

    @inject(tokens.ReleaseRoutes)
    private releaseRoutes: IBaseRoute,

    @inject(tokens.GroupRoutes)
    private groupRoutes: IBaseRoute,

    @inject(tokens.GalleryReleaseRoutes)
    private galleryReleaseRoutes: IBaseRoute,

    @inject(tokens.EmailListRoutes)
    private emailListRoutes: IBaseRoute,

    @inject(tokens.SendReleaseToMeRoutes)
    private sendReleaseToMeRoutes: IBaseRoute,

    @inject(tokens.SendReleaseToEmailListRoutes)
    private sendReleaseToEmailListRoutes: IBaseRoute
  ) { }

  /**
   * Make domain routes available to application.
   */
  public setupRouter() {
    const router = Router()
    // Docs routes
    const { docs } = this.config.get()
    if (docs.enabled) {
      router.use('/docs', this.docsController.initDocs)
      router.get('/docs', this.docsController.makeDocs)
    }

    router.get(
      '/v1/status',
      (req: Request, res: Response, next: NextFunction) =>
        this.authenticationMiddleware.handle(req, res, next),
      (_, res: Response) => {
        res.json({
          timestamp: new Date(),
        })
      }
    )

    router.use('/authentication', this.authenticationRoutes.setup())

    router.use(
      '/company',
      (req: Request, res: Response, next: NextFunction) =>
        this.authenticationMiddleware.handle(req, res, next),
      this.companyRoutes.setup()
    )

    router.use(
      '/user',
      (req: Request, res: Response, next: NextFunction) =>
        this.authenticationMiddleware.handle(req, res, next),
      this.userRoutes.setup()
    )

    router.use(
      '/sectors',
      this.sectorRoutes.setup()
      // (req: Request, res: Response, next: NextFunction) =>
      //   this.authenticationMiddleware.handle(req, res, next),
    )

    router.use(
      '/release',
      // (req: Request, res: Response, next: NextFunction) =>
      //   this.authenticationMiddleware.handle(req, res, next),
      this.releaseRoutes.setup()
    )

    router.use(
      '/group',
      // (req: Request, res: Response, next: NextFunction) =>
      //   this.authenticationMiddleware.handle(req, res, next),
      this.groupRoutes.setup()
    )

    router.use(
      '/gallery-release',
      // (req: Request, res: Response, next: NextFunction) =>
      //   this.authenticationMiddleware.handle(req, res, next),
      this.galleryReleaseRoutes.setup()
    )

    router.use(
      '/emailList',
      (req: Request, res: Response, next: NextFunction) =>
        this.authenticationMiddleware.handle(req, res, next),
      this.emailListRoutes.setup()
    )
  
    router.use(
      '/sendReleaseToMe',
        (req: Request, res: Response, next: NextFunction) =>
        this.authenticationMiddleware.handle(req, res, next),
     this.sendReleaseToMeRoutes.setup()
    )

    router.use(
      '/sendRelease', 
        (req: Request, res: Response, next: NextFunction) =>
        this.authenticationMiddleware.handle(req, res, next),
      this.sendReleaseToEmailListRoutes.setup()
    )

    return router
  }
}
