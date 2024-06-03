import ISector from './ISector'

export default interface ISectorService {
  findOneById(id: string): Promise<ISector | null>
  findAll(): Promise<ISector[]>
  create(sector: ISector): Promise<ISector>
  update(id: string, sector: ISector): Promise<ISector>
}
