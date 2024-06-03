import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class AddCascadeGalleryTable1714395936330 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table1 = await queryRunner.getTable('gallery_images')
    const galleryForeingKey = table1?.foreignKeys.find(fk => fk.columnNames.includes('gallery'))
    await queryRunner.dropForeignKey(table1!.name, galleryForeingKey as TableForeignKey)

    await queryRunner.createForeignKey(
      'gallery_images',
      new TableForeignKey({
        name: 'gallery_fk',
        columnNames: ['gallery'],
        referencedColumnNames: ['id'],
        referencedTableName: 'gallery',
        onDelete: 'CASCADE',
      })
    )
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {
  }

}
