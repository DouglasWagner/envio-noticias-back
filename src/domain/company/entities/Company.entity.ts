import { EmailList } from '../../emailList/entities/EmailList.entity'
import { User } from '../../authentication/entities/User.entity'
import { Column, CreateDateColumn, Entity, OneToMany } from 'typeorm'

@Entity()
export class Company {
  @Column({ primary: true, generated: 'uuid' })
  id!: string

  @Column()
  name!: string

  @Column()
  cnpj?: string

  @Column()
  size?: string

  @Column()
  city?: string

  @Column()
  state?: string

  @Column()
  area?: string

  @Column()
  image_path?: string

  @CreateDateColumn()
  created_at!: Date

  @OneToMany(() => User, (user) => user.company)
  users!: User[]

  @OneToMany(() => EmailList, (emailList) => emailList.company)
  emailList!: EmailList[]
}
