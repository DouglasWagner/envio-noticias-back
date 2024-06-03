import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import IReleaseService from '../interfaces/IReleaseService'
import { Release } from '../entities/Release.entity'
import ICreateRelease from '../interfaces/ICreateRelease'
import IReleaseRepository from '../interfaces/IReleaseRepository'
import IUpdateRelease from '../interfaces/IUpdateRelease'
import AzureConnection from '@infrastructure/azure/AzureConnection'

@injectable()
export default class ReleaseService implements IReleaseService {
  constructor(
    private azureConnection: AzureConnection,
    @inject(tokens.ReleaseRepository)
    private releaseRepository: IReleaseRepository
  ) { }

  async create(release: ICreateRelease): Promise<Release> {
    const newRelease = new Release()
    newRelease.title = release.title
    newRelease.subtitle = release.subtitle
    newRelease.id_sector = release.sector
    newRelease.id_group_customer = release.group
    newRelease.hashtags = release.hashtags
    newRelease.call = release.call
    newRelease.text = release.text
    newRelease.status = 'active'
    newRelease.user_id_creation = 1
    newRelease.user_id_last_update = 1

    if (release.files !== undefined) {
      const file = release.files[0]
      const imageBlob = new Blob([file.buffer], { type: file.mimetype })
      const { url } = await this.azureConnection.uploadBlob(
        'releasegallery',
        file.originalname,
        imageBlob
      )
      newRelease.image = url
    }

    return await this.releaseRepository.save(newRelease)
  }

  async list(): Promise<Release[]> {
    return await this.releaseRepository.list()
  }

  async update(id: string, release: IUpdateRelease): Promise<Release> {
    const oldRelease = (await this.releaseRepository.findOneById(id)) as Release
    oldRelease.title = release.title
    oldRelease.subtitle = release.subtitle
    oldRelease.id_sector = release.sector
    oldRelease.id_group_customer = release.id_group_customer
    oldRelease.hashtags = release.hashtags
    oldRelease.call = release.call as string
    oldRelease.text = release.text as string
    if (release.files?.length) {
      const file = release.files[0]
      const imageBlob = new Blob([file.buffer], { type: file.mimetype })
      const { url } = await this.azureConnection.uploadBlob(
        'releasegallery',
        file.originalname,
        imageBlob
      )
      oldRelease.image = url
    }

    return await this.releaseRepository.save(oldRelease)
  }

  async delete(id: string): Promise<void> {
    await this.releaseRepository.delete(id)
  }
}
