import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './events/create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create-user')
  handleCreateUser(data: CreateUserEvent) {
    return this.appService.handleCreateUser(data)
  }

  @MessagePattern({ cmd: 'analytics' })
  public getAnalytics() {
    return this.appService.getAnalytics()
  }
}
