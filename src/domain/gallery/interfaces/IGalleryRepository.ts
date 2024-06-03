import { Gallery } from '../entities/Gallery.entity'

export default interface IGalleryRepository {
  save(release: Gallery): Promise<Gallery>
  delete(id: string): Promise<void>
}
