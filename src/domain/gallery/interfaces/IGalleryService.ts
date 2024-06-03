export interface IGalleryService {
  create(releaseId: string): Promise<string>
  delete(id: string): Promise<void>
}
