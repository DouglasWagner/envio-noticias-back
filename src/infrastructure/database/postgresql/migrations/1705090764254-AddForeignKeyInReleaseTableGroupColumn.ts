import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddForeignKeyInReleaseTableGroupColumn1705090764254
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'release',
      'id_group_customer',
      new TableColumn({
        name: 'id_group_customer',
        type: 'uuid',
        generationStrategy: 'uuid',
      })
    )
    await queryRunner.createForeignKey(
      'release',
      new TableForeignKey({
        name: 'id_group_customer_fk',
        columnNames: ['id_group_customer'],
        referencedColumnNames: ['id'],
        referencedTableName: 'client_group',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('release')
    const groupForeignKey = table?.foreignKeys.find((fk) =>
      fk.columnNames.includes('id_group_customer')
    )
    await queryRunner.dropForeignKey(
      'release',
      groupForeignKey as TableForeignKey
    )
    await queryRunner.dropColumn('release', 'id_group_customer')
  }
}
