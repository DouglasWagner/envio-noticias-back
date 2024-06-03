import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddSectorsFKUsersTable1699364056696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'user',
      new TableColumn({
        name: 'sector',
        type: 'uuid',
        generationStrategy: 'uuid',
        isNullable: true,
      })
    )

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        name: 'sector_fk',
        columnNames: ['sector'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sector',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user')
    const sectorForeignKey = table?.foreignKeys.find((fk) =>
      fk.columnNames.includes('sector_id')
    )
    await queryRunner.dropForeignKey(
      'user',
      sectorForeignKey as TableForeignKey
    )
    await queryRunner.dropColumn('user', 'sector_id')
  }
}
