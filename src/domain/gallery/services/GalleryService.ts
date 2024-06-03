import { inject, injectable } from 'tsyringe'
import { Gallery } from '../entities/Gallery.entity'
import IGalleryRepository from '../interfaces/IGalleryRepository'
import { IGalleryService } from '../interfaces/IGalleryService'
import { tokens } from '@di/tokens'

@injectable()
export default class GalleryService implements IGalleryService {
  constructor(
    @inject(tokens.GalleryRepository)
    private galleryRepository: IGalleryRepository
  ) { }

  async create(releaseId: string): Promise<string> {
    const newGallery = new Gallery()
    newGallery.id_release = releaseId
    newGallery.status = 'active'
    newGallery.title = 'Gallery'
    newGallery.description = 'Gallery'
    newGallery.image = 'default.jpg'

    const gallery = await this.galleryRepository.save(newGallery)
    return gallery.id
  }

  async delete(id: string): Promise<void> {
    await this.galleryRepository.delete(id)
  }
}
