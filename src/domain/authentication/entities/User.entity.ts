import { Sector } from '../../sectors/entities/Sector.entity'
import { Company } from '../../company/entities/Company.entity'
import { EmailList } from '../../emailList/entities/EmailList.entity'
import { SendEmail } from '../../sendEmail/entities/SendEmail.entity'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  password?: string

  @Column()
  bio?: string

  @Column()
  mobile_phone?: string

  @Column()
  avatar_url?: string

  @Column()
  email_hash?: string

  @CreateDateColumn()
  created_at?: Date

  @Column()
  token!: string

  @Column()
  recovery_token?: string

  @Column()
  recovery_expiration_date?: Date

  @ManyToOne(() => Company, (company) => company.users)
  @JoinColumn({ name: 'company' })
  company!: Company

  @ManyToOne(() => Sector, (sector) => sector.users)
  @JoinColumn({ name: 'sector' })
  sector!: Sector

  @OneToMany(() => EmailList, (emailList) => emailList.users)
  emailList!: EmailList[]

  @OneToMany(() => SendEmail, (sendEmail) => sendEmail.users)
  sendEmail!: SendEmail[]
}
