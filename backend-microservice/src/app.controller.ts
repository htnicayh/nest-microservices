import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create-user')
  createUser(@Body() createUserDto: CreateUserDTO) {
    return this.appService.createUser(createUserDto)
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics()
  }
}
