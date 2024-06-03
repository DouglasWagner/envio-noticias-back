import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import { Sector } from '../entities/Sector.entity'
import ISectorService from '../interface/ISectorService'
import ISectorsRepository from '../interface/ISectorRepository'

import ISector from '../interface/ISector'

@injectable()
export default class SectorService implements ISectorService {
  constructor(
    @inject(tokens.SectorRepository)
    private sectorRepository: ISectorsRepository
  ) {}

  async findAll(): Promise<ISector[]> {
    return await this.sectorRepository.findAll()
  }

  async findOneById(id: string): Promise<ISector | null> {
    return await this.sectorRepository.findOneById(id)
  }

  async create(sector: ISector): Promise<ISector> {
    const newSector = new Sector()
    newSector.name = sector.name
    newSector.description = sector.description ?? ''

    return await this.sectorRepository.save(newSector)
  }

  async update(id: string, sector: ISector): Promise<ISector> {
    const oldSector = (await this.sectorRepository.findOneById(id)) as Sector
    oldSector.name = sector.name

    return await this.sectorRepository.save(oldSector)
  }
}
