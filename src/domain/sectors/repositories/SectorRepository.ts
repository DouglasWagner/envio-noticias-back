import AppDataSource from '@infrastructure/database/postgresql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Sector } from '../entities/Sector.entity'
import ISectorsRepository from '../interface/ISectorRepository'
import ISector from '../interface/ISector'

@injectable()
export default class SectorRepository implements ISectorsRepository {
  public sectorRepository: Repository<Sector>
  constructor() {
    this.sectorRepository = AppDataSource.getRepository(Sector)
  }

  async save(sector: ISector): Promise<ISector> {
    return await this.sectorRepository.save(sector)
  }

  async findAll(): Promise<ISector[]> {
    return await this.sectorRepository.find({
      order: {
        id: 'DESC',
      },
    })
  }
  async findOneById(id: string): Promise<ISector | null> {
    return await this.sectorRepository.findOneBy({ id })
  }
}
