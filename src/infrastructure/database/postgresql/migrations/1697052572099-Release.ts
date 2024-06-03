import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class Release1697052572099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'release',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['active', 'inactive'],
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'subtitle',
            type: 'varchar',
          },
          {
            name: 'id_sector',
            type: 'uuid',
          },
          {
            name: 'id_group_customer',
            type: 'uuid',
          },
          {
            name: 'hashtags',
            type: 'varchar',
          },
          {
            name: 'call',
            type: 'varchar',
          },
          {
            name: 'text',
            type: 'text',
          },
          {
            name: 'image',
            type: 'varchar',
          },
        ],
      })
    )

    await queryRunner.createForeignKey(
      'release',
      new TableForeignKey({
        columnNames: ['id_sector'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sector',
        onDelete: 'CASCADE',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('release', 'FK_release_sector')

    await queryRunner.dropTable('release')
  }
}
