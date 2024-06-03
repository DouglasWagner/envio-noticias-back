/* eslint-disable prettier/prettier */
import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm'

export class CreateEmailListTable1713553413261 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'email_list',
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
                        name: 'company',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'emailAddress',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'insertDataTime',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'user',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'hashMailList',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            })
        )

        await queryRunner.createForeignKey(
            'email_list',
            new TableForeignKey({
                name:'FK_email_list_Company',
                columnNames: ['company'],
                referencedColumnNames: ['id'],
                referencedTableName: 'company',
                onDelete: 'CASCADE',
            })
        )

        await queryRunner.createForeignKey(
            'email_list',
            new TableForeignKey({
                name:'FK_email_list_User',
                columnNames: ['user'],
                referencedColumnNames: ['id'],
                referencedTableName: 'user',
                onDelete: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('email_list', 'FK_email_list_Company')
        await queryRunner.dropForeignKey('email_list', 'FK_email_list_User')
        await queryRunner.dropTable('email_list')
    }
}
