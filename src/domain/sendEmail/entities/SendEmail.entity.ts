import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { User } from '../../authentication/entities/User.entity'
import { EmailList } from '../../emailList/entities/EmailList.entity'
import { Release } from '../../release/entities/Release.entity'

@Entity()
export class SendEmail {
  @Column({ primary: true, generated: 'uuid' })
  id!: string

  @Column()
  dateTimeSent!: Date

  @Column()
  dateTimeView?: Date

  @ManyToOne(() => Release, (release) => release.sendEmail)
  @JoinColumn({ name: 'release' })
  release?: Release 

  @ManyToOne(() => User, (user) => user.sendEmail)
  @JoinColumn({ name: 'user' })
  users?: User

  @ManyToOne(() => EmailList, (emailList) => emailList.sendEmail)
  @JoinColumn({ name: 'emailList' })
  emailList?: EmailList
}
