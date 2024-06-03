import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import IGroupService from '../interfaces/IGroupService'
import { Group } from '../entities/Group.entity'
import IGroupRepository from '../interfaces/IGroupRepository'
import ICreateGroup from '../interfaces/ICreateGroup'

@injectable()
export default class GroupService implements IGroupService {
  constructor(
    @inject(tokens.GroupRepository)
    private groupRepository: IGroupRepository
  ) {}

  async list(): Promise<Group[]> {
    return await this.groupRepository.list()
  }

  async create(group: ICreateGroup): Promise<Group> {
    const newGroup = new Group()
    newGroup.name = group.name
    newGroup.client = '123e4567-e89b-12d3-a456-426614174000'

    return await this.groupRepository.save(newGroup)
  }
}
