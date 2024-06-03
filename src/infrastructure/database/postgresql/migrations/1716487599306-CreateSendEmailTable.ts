import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm'
export class CreateSendEmailTable1716487599306 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
            new Table({
                name: 'send_email',
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
                        name: 'release',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'user',
                        type: 'uuid',
                        isNullable: false,
                    },
                     {
                        name: 'emailList',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'dateTimeSent',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'dateTimeView',
                        type: 'timestamp',
                        isNullable: true,
                    },
                ],
            })
        )

        await queryRunner.createForeignKey(
            'send_email',
            new TableForeignKey({
                name:'FK_sendEmail_release',
                columnNames: ['release'],
                referencedColumnNames: ['id'],
                referencedTableName: 'release',
            })
        )

        await queryRunner.createForeignKey(
            'send_email',
            new TableForeignKey({
                name:'FK_sendEmail_user',
                columnNames: ['user'],
                referencedColumnNames: ['id'],
                referencedTableName: 'user',
            })
        )

        await queryRunner.createForeignKey(
            'send_email',
            new TableForeignKey({
                name:'FK_sendEmail_emailList',
                columnNames: ['emailList'],
                referencedColumnNames: ['id'],
                referencedTableName: 'email_list',
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('send_email', 'FK_sendEmail_release')
        await queryRunner.dropForeignKey('send_email', 'FK_sendEmail_user')
        await queryRunner.dropForeignKey('send_email', 'FK_sendEmail_emailList')
        await queryRunner.dropTable('send_email')
    }

}
