/* eslint-disable prettier/prettier */
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { Sector } from '../../../../domain/sectors/entities/Sector.entity'

export default class SectorSeeder implements Seeder {
  async run(dataSource: DataSource, _: SeederFactoryManager): Promise<void> {
    const sectorRepository = dataSource.getRepository(Sector)

    const sectors = [
      { name: "Transporte", description: "Transporte" },
      { name: "Aeroespacial", description: "Aeroespacial" },
      { name: "Agrícola", description: "Agrícola" },
      { name: "Tecnologia", description: "Tecnologia" },
      { name: "Telecomunicações", description: "Telecomunicações" },
      { name: "Educação", description: "Educação" },
      { name: "Construção Civil", description: "Construção Civil" },
      { name: "Eletrônicos", description: "Eletrônicos" },
      { name: "Transformação", description: "Transformação" },
      { name: "Energia", description: "Energia" },
      { name: "Farmacêutica", description: "Farmacêutica" },
      { name: "Saúde", description: "Saúde" },
      { name: "Alimentos", description: "Alimentos" },
      { name: "Entretenimento", description: "Entretenimento" },
      { name: "Mídias", description: "Mídias" },
      { name: "Mineração", description: "Mineração" },
      { name: "Turismo", description: "Turismo" },
      { name: "Comércio", description: "Comércio" },
      { name: "Automobilistica", description: "Automobilistica" },
      { name: "Naval", description: "Naval" }
    ]
    await sectorRepository.save(sectors)
  }
}
