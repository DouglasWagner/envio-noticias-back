import ISector from './ISector'

export default interface ISectorsRepository {
  save(sector: ISector): Promise<ISector>
  findOneById(id: string): Promise<ISector | null>
  findAll(): Promise<ISector[]>
}
