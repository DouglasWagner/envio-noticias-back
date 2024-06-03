import { Release } from '../entities/Release.entity'
import { ReleaseImage } from '../entities/ReleaseImage.entity'

export default interface IReleaseRepository {
  save(release: Release): Promise<Release>
  saveReleaseImage(release: ReleaseImage): Promise<ReleaseImage>
  list(): Promise<Release[]>
  findOneById(id: string): Promise<Release | null>
  delete(id: string): Promise<void>
}
