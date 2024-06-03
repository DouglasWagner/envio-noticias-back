import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import { v4 as uuidv4 } from 'uuid'
import AzureConnection from '@infrastructure/azure/AzureConnection'
import IReleaseImageService from '@domain/release/interfaces/IReleaseImageService'
import { IGalleryService } from '@domain/gallery/interfaces/IGalleryService'
import { tokens } from '@di/tokens'

@injectable()
export class ReleaseImagesCreateController
  extends BaseController
  implements IController
{
  constructor(
    private azureConnection: AzureConnection,
    @inject(tokens.ReleaseImageService)
    private releaseImageService: IReleaseImageService,
    @inject(tokens.GalleryService)
    private galleryService: IGalleryService
  ) {
    super()
    this.azureConnection = AzureConnection.getInstance()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    if (!req.files || req.files.length === 0) {
      return this.error(res, 'Nenhum arquivo enviado.')
    }

    const files = Array.isArray(req.files) ? req.files : [req.files]

    const organizedFiles = files.map((file) => {
      return {
        ...file,
        filename: `${uuidv4()}-${file.originalname}`,
      }
    })

    const containerName = 'releasegallery'
    const releaseId = req.body.releaseId
    try {
      for (let [index, file] of organizedFiles.entries()) {
        if ('buffer' in file) {
          const imageBlob = new Blob([file.buffer], { type: file.mimetype })
          const { status, url } = await this.azureConnection.uploadBlob(
            containerName,
            file.filename,
            imageBlob
          )

          if (status === 201) {
            const galleryId = await this.galleryService.create(releaseId)
            await this.releaseImageService.create({
              galleryId,
              url,
              title: req.body[`title_${index}`],
              description: req.body[`description_${index}`]
            })
          }
        }
      }
      return this.success(res, 'Arquivos enviados com sucesso.', {
        files: organizedFiles,
      })
    } catch (error) {
      console.error(error)
      return this.error(res, 'Erro ao fazer upload dos arquivos.')
    }
  }
}
