import {
  BlobServiceClient,
  BlobUploadCommonResponse,
} from '@azure/storage-blob'

export type AzureUplod = {
  status: number
  url: string
}

class AzureConnection {
  private static instance: AzureConnection | null = null
  private blobServiceClient: BlobServiceClient | null = null

  private constructor() {
    const AZURE_STORAGE_CONNECTION_STRING =
      process.env.AZURE_STORAGE_CONNECTION_STRING

    if (!AZURE_STORAGE_CONNECTION_STRING) {
      throw new Error('Azure Storage connection string not found.')
    }

    this.blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    )
  }

  public static getInstance(): AzureConnection {
    if (!AzureConnection.instance) {
      AzureConnection.instance = new AzureConnection()
    }
    return AzureConnection.instance
  }

  public async createContainer(containerName: string): Promise<void> {
    if (!this.blobServiceClient) {
      throw new Error('Azure Blob Service Client not initialized.')
    }

    const containerClient =
      this.blobServiceClient.getContainerClient(containerName)
    await containerClient.create()
  }

  public async uploadBlob(
    containerName: string,
    blobName: string,
    blob: Blob
  ): Promise<AzureUplod> {
    if (!this.blobServiceClient) {
      throw new Error('Azure Blob Service Client not initialized.')
    }

    const containerClient =
      this.blobServiceClient.getContainerClient(containerName)
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)

    console.log(
      `\nUploading to Azure storage as blob\n\tname: ${blobName}:\n\tURL: ${blockBlobClient.url}`
    )

    const arrayBuffer = await blob.arrayBuffer()
    const uploadBlobResponse: BlobUploadCommonResponse =
      await blockBlobClient.upload(arrayBuffer, arrayBuffer.byteLength)
    
    return { status: uploadBlobResponse._response.status, url: blockBlobClient.url }
  }

  public async list(containerName: string) {
    if (!this.blobServiceClient) {
      throw new Error('Azure Blob Service Client not initialized.')
    }

    const containerClient = this.blobServiceClient.getContainerClient(containerName)

    const blobs = containerClient.listBlobsFlat()
    for await (const blob of blobs) {
      console.log(`- ${blob.name}`)
    }
  }
}

export default AzureConnection
