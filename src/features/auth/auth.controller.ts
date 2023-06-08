import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignOutRequest } from './requests/sign-out.request.dto';
import { IsAuthGuard } from '@guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-out')
  async signOut(@Body() body: SignOutRequest) {
    return await this.authService.signOut(body);
  }

  @Post('/sign-in')
  async sign(@Body() body: SignOutRequest) {
    return await this.authService.signIn(body);
  }

  @UseGuards(IsAuthGuard)
  @Get('/:id')
  async getUser(@Param('id') id: string) {
    return await this.authService.getUser(id);
  }
}
