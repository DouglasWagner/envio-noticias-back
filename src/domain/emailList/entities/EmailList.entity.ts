import { User } from '../../authentication/entities/User.entity'
import { Company } from '../../company/entities/Company.entity'
import { SendEmail } from '../../sendEmail/entities/SendEmail.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'

@Entity()
export class EmailList {
  @Column({ primary: true, generated: 'uuid' })
  id!: string

  @Column()
  emailAddress?: string

  @Column()
  status?: string

  @Column()
  hashMailList?: string

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  insertDataTime?: Date

  @ManyToOne(() => User, (user) => user.emailList)
  @JoinColumn({ name: 'user' })
  users?: User

  @ManyToOne(() => Company, (company) => company.emailList)
  @JoinColumn({ name: 'company' })
  company?: Company

  @OneToMany(() => SendEmail, (sendEmail) => sendEmail.emailList)
  sendEmail?: SendEmail[]
}
