export default interface IReleaseImageService {
  create(input: ReleaseImageServiceCreate): Promise<void>
}


export type ReleaseImageServiceCreate = {
  galleryId: string
  url: string
  title: string
  description: string
}