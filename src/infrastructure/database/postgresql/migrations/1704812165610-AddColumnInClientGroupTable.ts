import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddColumnInClientGroupTable1704812165610
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('client_group', [
      new TableColumn({
        name: 'client',
        type: 'uuid',
        generationStrategy: 'uuid',
      }),
    ])

    await queryRunner.createForeignKey(
      'client_group',
      new TableForeignKey({
        name: 'client_fk',
        columnNames: ['client'],
        referencedColumnNames: ['id'],
        referencedTableName: 'client',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('client_group', 'client')
  }
}
