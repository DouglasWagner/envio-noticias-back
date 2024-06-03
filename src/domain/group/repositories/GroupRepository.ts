import AppDataSource from '@infrastructure/database/postgresql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Group } from '../entities/Group.entity'
import IGroupRepository from '../interfaces/IGroupRepository'

@injectable()
export default class GroupRepository implements IGroupRepository {
  public groupRepository: Repository<Group>
  constructor() {
    this.groupRepository = AppDataSource.getRepository(Group)
  }

  async list(): Promise<Group[]> {
    return await this.groupRepository.find()
  }

  async save(group: Group): Promise<Group> {
    return await this.groupRepository.save(group)
  }
}
