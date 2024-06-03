import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateGalleryImagesTable1707872297347
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'gallery_images',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'gallery',
            type: 'uuid',
            generationStrategy: 'uuid',
          },
          {
            name: 'img',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'integer',
          },
        ],
      })
    )

    await queryRunner.createForeignKey(
      'gallery_images',
      new TableForeignKey({
        name: 'gallery_fk',
        columnNames: ['gallery'],
        referencedColumnNames: ['id'],
        referencedTableName: 'gallery',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('gallery_images')
  }
}
