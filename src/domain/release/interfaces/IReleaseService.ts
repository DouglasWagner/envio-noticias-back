import { Release } from '../entities/Release.entity'
import ICreateRelease from './ICreateRelease'
import IUpdateRelease from './IUpdateRelease'

export default interface IReleaseService {
  create(release: ICreateRelease): Promise<Release>
  list(): Promise<Release[]>
  update(id: string, release: IUpdateRelease): Promise<Release>
  delete(id: string): Promise<void>
}
