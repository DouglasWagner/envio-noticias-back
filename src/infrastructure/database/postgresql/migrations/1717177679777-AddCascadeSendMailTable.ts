import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddCascadeSendMailTable1717177679777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('send_email', 'FK_sendEmail_emailList');

      await queryRunner.createForeignKey(
        'send_email',
        new TableForeignKey({
          name: 'FK_sendEmail_emailList',
          columnNames: ['emailList'],
          referencedColumnNames: ['id'],
          referencedTableName: 'email_list',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('send_email', 'FK_sendEmail_emailList')
    }

}
