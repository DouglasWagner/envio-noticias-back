import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class Log1697052477224 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'log',
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
            name: 'date_time',
            type: 'timestamp',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'ip',
            type: 'varchar',
          },
          {
            name: 'id_user',
            type: 'uuid',
          },
          {
            name: 'user_type',
            type: 'uuid',
          },
          {
            name: 'route',
            type: 'varchar',
          },
        ],
      })
    )

    await queryRunner.createForeignKey(
      'log',
      new TableForeignKey({
        columnNames: ['id_user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      })
    )

    await queryRunner.createForeignKey(
      'log',
      new TableForeignKey({
        columnNames: ['user_type'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_type',
        onDelete: 'CASCADE',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('log', 'FK_logs_user_type')
    await queryRunner.dropForeignKey('log', 'FK_logs_user')

    await queryRunner.dropTable('log')
  }
}
