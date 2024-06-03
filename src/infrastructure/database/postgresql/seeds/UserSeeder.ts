import bcryptjs from 'bcryptjs'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { User } from '../../../../domain/authentication/entities/User.entity'
import { Company } from '../../../../domain/company/entities/Company.entity'
import { Sector } from '../../../../domain/sectors/entities/Sector.entity'

export default class UserSeeder implements Seeder {
  async run(dataSource: DataSource, _: SeederFactoryManager): Promise<void> {
    const userRepository = dataSource.getRepository(User)
    const companyRepository = dataSource.getRepository(Company)
    const sectorRepository = dataSource.getRepository(Sector)
    const encryptedPassword = await bcryptjs.hash('RhlBox#2024', 15)
    const encryptedEmail = await bcryptjs.hash('rodrigo@boxti.com.br', 15)
    const company = (await companyRepository.findOneBy({
      cnpj: '06.063.695/0001-37',
    })) as Company
    const sector = (await sectorRepository.findOneBy({
      name: 'Tecnologia',
    })) as Sector

    const user = new User()
    user.name = 'Rodrigo Luckow'
    user.email = 'rodrigo@boxti.com.br'
    user.email_hash = encryptedEmail
    user.password = encryptedPassword
    user.company = company
    user.sector = sector
    await userRepository.save(user)
  }
}
