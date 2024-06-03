import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateUserClientTable1704809871905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_client',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user',
            type: 'uuid',
            generationStrategy: 'uuid',
          },
          {
            name: 'client',
            type: 'uuid',
            generationStrategy: 'uuid',
          },
          {
            name: 'status',
            type: 'integer',
          },
          {
            name: 'user_type',
            type: 'uuid',
            generationStrategy: 'uuid',
          },
        ],
      })
    )

    await queryRunner.createForeignKey(
      'user_client',
      new TableForeignKey({
        name: 'user_fk',
        columnNames: ['user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
      })
    )

    await queryRunner.createForeignKey(
      'user_client',
      new TableForeignKey({
        name: 'user_type_fk',
        columnNames: ['user_type'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_type',
      })
    )

    await queryRunner.createForeignKey(
      'user_client',
      new TableForeignKey({
        name: 'client_fk',
        columnNames: ['client'],
        referencedColumnNames: ['id'],
        referencedTableName: 'client',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_client')
  }
}
