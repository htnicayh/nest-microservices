import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserDTO } from './dtos/create-user.dto';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = []

  constructor(
    @Inject('COMMUNICATION') private readonly communication: ClientProxy,
    @Inject('ANALYTICS') private readonly analytics: ClientProxy
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserDto: CreateUserDTO) {
    const { email } = createUserDto
    this.users.push(createUserDto)
    this.communication.emit(
      'create-user', 
      new CreateUserEvent(email)
    )
    this.analytics.emit(
      'create-user',
      new CreateUserEvent(email)
    )
  }

  getAnalytics() {
    this.analytics.send<{}>({ cmd: 'analytics' }, {})
  }
}
