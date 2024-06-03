import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class UserType1697049679294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_type',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isUnique: true,
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
          },
        ],
      })
    )

    await queryRunner.query(
      "INSERT INTO user_type (id, description) VALUES (uuid_generate_v4(), 'admin_system'), (uuid_generate_v4(), 'admin_client'), (uuid_generate_v4(), 'edit'), (uuid_generate_v4(), 'viewer')"
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_type')
  }
}
