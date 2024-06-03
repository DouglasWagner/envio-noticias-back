import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterReleaseTable1703196832079 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('release', [
      new TableColumn({
        name: 'date_time_creation',
        type: 'timestamp',
        default: 'now()',
      }),
      new TableColumn({
        name: 'date_time_last_update',
        type: 'timestamp',
        isNullable: true,
      }),
      new TableColumn({
        name: 'user_id_creation',
        type: 'int',
      }),
      new TableColumn({
        name: 'user_id_last_update',
        type: 'int',
        isNullable: true,
      }),
    ])

    await queryRunner.query(
      `ALTER TABLE "release" ALTER COLUMN "image" DROP NOT NULL`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('release', 'date_time_creation')
    await queryRunner.dropColumn('release', 'date_time_last_update')
    await queryRunner.dropColumn('release', 'user_id_creation')
    await queryRunner.dropColumn('release', 'user_id_last_update')
    await queryRunner.query(
      `ALTER TABLE "release" ALTER COLUMN "image" SET NOT NULL`
    )
  }
}
