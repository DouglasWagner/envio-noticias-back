import { Release } from '../../release/entities/Release.entity'
import { ReleaseImage } from '../../release/entities/ReleaseImage.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'

@Entity()
export class Gallery {
  @Column({ primary: true, generated: 'uuid' })
  id!: string

  @Column()
  id_release?: string

  @Column()
  status?: string

  @Column()
  title?: string

  @Column()
  description?: string

  @Column()
  image?: string

  @ManyToOne(() => Release, (release) => release.gallery)
  @JoinColumn({ name: "id_release" })
  release!: Release

  @OneToMany(() => ReleaseImage, (releaseImage) => releaseImage.galleryEntity)
  images!: ReleaseImage[]
}
