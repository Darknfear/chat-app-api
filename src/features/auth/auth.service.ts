import { UserRepository } from '@features/user/user.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SignOutRequest } from './requests/sign-out.request.dto';
import { UserStatus } from '@constants/user.enum';
import { SignInRequest } from './requests/sign-in.request.dto';
import { JwtPayloadRequest } from './requests/jwt.request.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  private generateJwtToken(payload: JwtPayloadRequest) {
    return this.jwtService.sign(payload);
  }

  async signOut(payload: SignOutRequest) {
    console.log(this.userRepo);
    const user = new User();
    user.email = payload.email;
    user.password = payload.password;
    user.status = UserStatus.ACTIVE;
    return await this.userRepo.save(user);
  }

  async signIn(payload: SignInRequest) {
    const { email, password } = payload;
    const user = await this.userRepo.findOneBy({
      email,
      status: UserStatus.ACTIVE,
    });

    if (!user) {
      throw new BadRequestException('Wrong email or password!');
    }

    const token = this.generateJwtToken({ email });

    return {
      token,
    };
  }

  async getUser(id: string) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      return new BadRequestException();
    }

    return user;
  }
}
