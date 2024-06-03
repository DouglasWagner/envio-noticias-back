import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IGroupService from '@domain/group/interfaces/IGroupService'

@injectable()
export class GroupListController extends BaseController implements IController {
  constructor(
    @inject(tokens.GroupService)
    private groupService: IGroupService
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const group = await this.groupService.list()
      return this.success(res, 'Group list.', group)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
