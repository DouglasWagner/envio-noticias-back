import { tokens } from '@di/tokens'
import ISectorService from '@domain/sectors/interface/ISectorService'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'

type RequestParams = {
  id: string
}

@injectable()
export class SectorGetController extends BaseController implements IController {
  constructor(
    @inject(tokens.SectorService)
    private sectorService: ISectorService
  ) {
    super()
  }

  async handle(_req: Request<RequestParams>, res: Response) {
    try {
      const sector = await this.sectorService.findAll()
      if (sector.length === 0) {
        return this.success(res, 'sector not found', {}, 404)
      }

      const basicSector = [...sector]
      return this.success(res, 'Sector successfully retrieved.', basicSector)
    } catch (err: any) {
      console.log(err)
      return this.error(res, err.message)
    }
  }
}
