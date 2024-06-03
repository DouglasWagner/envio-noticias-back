import { Column, Entity } from 'typeorm'

@Entity('client_group')
export class Group {
  @Column({ primary: true, generated: 'uuid' })
  id!: string

  @Column()
  name?: string

  @Column()
  client!: string
}
