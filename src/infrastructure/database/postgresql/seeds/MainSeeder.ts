import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import CompanySeeder from './CompanySeeder'
import SectorSeeder from './SectorSeeder'
import UserSeeder from './UserSeeder'

export default class MainSeeder implements Seeder {
  async run(dataSource: DataSource, _: SeederFactoryManager): Promise<void> {
    await runSeeder(dataSource, UserSeeder)
    await runSeeder(dataSource, CompanySeeder)
    await runSeeder(dataSource, SectorSeeder)
  }
}
