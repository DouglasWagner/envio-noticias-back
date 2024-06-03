import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IGroupService from '@domain/group/interfaces/IGroupService'

@injectable()
export class GroupCreateController
  extends BaseController
  implements IController
{
  constructor(
    @inject(tokens.GroupService)
    private groupService: IGroupService
  ) {
    super()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const newGroup = {
        name: req.body.group,
      }

      const group = await this.groupService.create(newGroup)
      return this.success(res, 'Grupo criado.', group)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
