import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleCreateUser(data: CreateUserEvent) {
    console.log('HandleCreateUser- Microservices COMMUNICATION ', data)
  }
}
