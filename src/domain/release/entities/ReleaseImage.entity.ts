import { Gallery } from '../../gallery/entities/Gallery.entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

@Entity('gallery_images')
export class ReleaseImage {
  @Column({ primary: true, generated: 'uuid' })
  id!: string

  @Column()
  gallery?: string

  @Column()
  img?: string

  @Column()
  title?: string

  @Column()
  description?: string

  @Column()
  status?: number

  @ManyToOne(() => Gallery, (gallery) => gallery.images, { onDelete: 'CASCADE'})
  @JoinColumn({ name: 'gallery'})
  galleryEntity!: Gallery
}
