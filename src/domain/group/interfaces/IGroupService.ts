import { Group } from '../entities/Group.entity'
import ICreateGroup from './ICreateGroup'

export default interface IGroupService {
  list(): Promise<Group[]>
  create(group: ICreateGroup): Promise<Group>
}
