import { Repository } from 'typeorm'
import { Gallery } from '../entities/Gallery.entity'
import IGalleryRepository from '../interfaces/IGalleryRepository'
import AppDataSource from '@infrastructure/database/postgresql/AppDataSource'
import { injectable } from 'tsyringe'

@injectable()
export default class GalleryRepository implements IGalleryRepository {
  public galleryRepository: Repository<Gallery>

  constructor() {
    this.galleryRepository = AppDataSource.getRepository(Gallery)
  }

  async save(gallery: Gallery): Promise<Gallery> {
    return await this.galleryRepository.save(gallery)
  }

  async delete(id: string): Promise<void> {
    await this.galleryRepository.delete(id)
  }
}
