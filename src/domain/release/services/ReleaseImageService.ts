import { inject, injectable } from 'tsyringe'
import IReleaseImageService, { ReleaseImageServiceCreate } from '../interfaces/IReleaseImageService'
import IReleaseRepository from '../interfaces/IReleaseRepository'
import { ReleaseImage } from '../entities/ReleaseImage.entity'
import { tokens } from '@di/tokens'

@injectable()
export default class ReleaseImageService implements IReleaseImageService {
  constructor(
    @inject(tokens.ReleaseRepository)
    private releaseRepository: IReleaseRepository
  ) {}

  async create(input: ReleaseImageServiceCreate): Promise<void> {
    const releaseImage = new ReleaseImage()
    releaseImage.gallery = input.galleryId
    releaseImage.img = input.url
    releaseImage.title = input.title
    releaseImage.description = input.description
    releaseImage.status = 1

    await this.releaseRepository.saveReleaseImage(releaseImage)
  }
}
