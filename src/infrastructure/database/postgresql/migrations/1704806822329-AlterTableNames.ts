import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterNameCustomerGroupTable1704806822329
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('CustomerGroup', 'client_group')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('client_group', 'CustomerGroup')
  }
}
