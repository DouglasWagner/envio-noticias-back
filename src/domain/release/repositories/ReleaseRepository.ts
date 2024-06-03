import AppDataSource from '@infrastructure/database/postgresql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import IReleaseRepository from '../interfaces/IReleaseRepository'
import { Release } from '../entities/Release.entity'
import { ReleaseImage } from '../entities/ReleaseImage.entity'

@injectable()
export default class ReleaseRepository implements IReleaseRepository {
  public releaseRepository: Repository<Release>
  public releaseImageRepository: Repository<ReleaseImage>

  constructor() {
    this.releaseRepository = AppDataSource.getRepository(Release)
    this.releaseImageRepository = AppDataSource.getRepository(ReleaseImage)
  }

  async save(release: Release): Promise<Release> {
    return await this.releaseRepository.save(release)
  }

  async list(): Promise<Release[]> {
    return await this.releaseRepository.find({ 
      relations: {
        gallery: {
          images: true
        }
      } 
    })
  }

  async findOneById(id: string): Promise<Release | null> {
    return await this.releaseRepository.findOneBy({ id })
  }

  async delete(id: string): Promise<void> {
    await this.releaseRepository.delete(id)
  }

  async saveReleaseImage(release: ReleaseImage): Promise<ReleaseImage> {
    return await this.releaseImageRepository.save(release)
  }
}
