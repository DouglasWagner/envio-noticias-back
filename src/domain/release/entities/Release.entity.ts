import { SendEmail } from '../../sendEmail/entities/SendEmail.entity'
import { Gallery } from '../../gallery/entities/Gallery.entity'
import { Column, CreateDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm'

@Entity()
export class Release {
  @Column({ primary: true, generated: 'uuid' })
  id!: string

  @Column()
  title?: string

  @Column()
  subtitle?: string

  @Column()
  id_sector?: string

  @Column()
  id_group_customer?: string

  @Column()
  hashtags?: string

  @Column()
  call!: string

  @Column()
  text!: string

  @Column({ nullable: true, type: 'varchar' })
  image!: string | null

  @Column()
  status?: string

  @CreateDateColumn()
  date_time_creation!: Date

  @UpdateDateColumn()
  date_time_last_update!: Date

  @Column()
  user_id_creation!: number

  @Column()
  user_id_last_update!: number

  @OneToMany(() => Gallery, (gallery) => gallery.release)
  gallery!: Gallery[]

  @OneToMany(() => SendEmail, (sendEmail) => sendEmail.release)
  sendEmail!: SendEmail[]
}
