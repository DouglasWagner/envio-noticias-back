import { Group } from '../entities/Group.entity'

export default interface IGroupRepository {
  list(): Promise<Group[]>
  save(group: Group): Promise<Group>
}
