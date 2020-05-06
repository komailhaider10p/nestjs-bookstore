import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CredentialsDTO } from './auth/dto/credentials.dto'
import { ApiBody, ApiConsumes, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiOperation({ summary: 'Login NestJS' })
  @Post('auth/login')
  @ApiBody({
    type: CredentialsDTO
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
