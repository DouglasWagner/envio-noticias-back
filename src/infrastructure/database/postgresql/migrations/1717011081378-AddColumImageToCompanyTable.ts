import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumImageToCompanyTable1717011081378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns('company', [
      new TableColumn({
        name: 'image_path',
        type: 'varchar',
        isNullable: true,
      }),
    ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('company', 'image_path')
    }

}
