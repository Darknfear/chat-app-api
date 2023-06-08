import { CustomBaseEntity } from '@common/base/base.entity';
import { UserStatus } from '@constants/user.enum';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends CustomBaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserStatus })
  status: UserStatus;
}
