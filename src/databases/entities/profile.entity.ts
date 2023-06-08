import { CustomBaseEntity } from '@common/base/base.entity';
import { ProfileStatus } from '@constants/user.enum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('profiles')
export class profile extends CustomBaseEntity {
  @Column({ name: 'user_id' })
  userId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  birthDay: Date;

  @Column()
  gender: string;

  @Column({ type: 'enum', enum: ProfileStatus })
  status: ProfileStatus;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
